import { FieldPolicy, Reference } from '@apollo/client';

type KeyArgs = FieldPolicy<any>['keyArgs'];

type TInternalRelay<TNode> = Readonly<{
  edges: Array<{
    node: TNode;
  }>;
  pageInfo: Readonly<{
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    offset: number;
    limit: number;
  }>;
}>;

export function relayStyleOffsetPagination<TNode = Reference>(
  keyArgs: KeyArgs = false
): FieldPolicy<TInternalRelay<TNode>> {
  return {
    keyArgs,

    read(existing, { canRead }) {
      if (!existing) return;
      const edges = existing.edges.filter((edge) => canRead(edge.node));
      return {
        ...existing,
        edges,
      };
    },

    merge(existing = makeEmptyData(), incoming, { args }) {
      if (!args) return existing; // TODO Maybe throw?
      const edges = !args.offset
        ? [].concat(incoming.edges)
        : [...existing.edges, ...incoming.edges];

      return {
        ...existing,
        ...incoming,
        edges,
      };
    },
  };
}

function makeEmptyData() {
  return {
    edges: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
      offset: 0,
      limit: 0,
    },
  };
}
