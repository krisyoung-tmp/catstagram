import React from 'react';
import styled from '@emotion/styled';
import {
  Pane,
  SegmentedControl,
  Popover,
  Menu,
  Tooltip,
  IconButton,
  Position,
  SettingsIcon,
} from 'evergreen-ui';

const StyledContainer = styled(Pane)`
  text-transform: capitalize;
`;

export const CategoriesFilter = ({
  filters,
  onChangeFilters,
  isSmallScreen = false,
}) => {
  if (isSmallScreen) {
    return (
      <Popover
        position={Position.BOTTOM_LEFT}
        shouldCloseOnExternalClick
        content={({ close }) => (
          <StyledContainer>
            <Menu>
              <Menu.OptionsGroup
                data-testid="categories"
                title="Cat-egories"
                options={filters?.categories?.options}
                selected={filters?.categories.value}
                onChange={(value) => {
                  onChangeFilters({ categories: value });
                  close();
                }}
              />
            </Menu>
          </StyledContainer>
        )}
      >
        <Tooltip content="Filters">
          <IconButton icon={SettingsIcon}>Upload</IconButton>
        </Tooltip>
      </Popover>
    );
  }

  return (
    <StyledContainer>
      <SegmentedControl
        data-testid="categories"
        height={42}
        value={filters?.categories?.value ?? ''}
        options={filters?.categories?.options ?? []}
        onChange={(value) => onChangeFilters({ categories: value })}
      />
    </StyledContainer>
  );
};
