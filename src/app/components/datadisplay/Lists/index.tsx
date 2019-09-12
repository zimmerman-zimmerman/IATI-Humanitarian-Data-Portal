import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './common/ListItem';
import { ListModel } from './model';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

// TODO:
// - Optional highlight

export const Base = styled(props => <Paper {...props} />)`
  padding: 8px 28px 32px 28px;
  && {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
  }
`;

export const TableHeader = styled(props => <TableCell {...props} />)`
  && {
    padding-left: 0px;
  }
`;

export const TableValueHeader = styled(props => <TableCell {...props} />)`
  && {
    text-transform: capitalize;
  }
`;

export const TableTitle = styled(props => <Typography {...props} />)`
  && {
    color: black;
  }
`;

export const TableSubtitle = styled(props => <Typography {...props} />)``;

export const List = (props: ListModel) => {
  const items = props.items || [];

  const listItems = items.map(item => (
    <ListItem label={item.label} values={item.values} tooltip={item.tooltip} />
  ));

  // https://dev.to/claireparkerjones/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6
  // TODO: Refactor code, this logic does not matches the headers with the actual value. Works for now but may cause problems.
  function valueHeaders(showHeadersText) {
    const tableHeadersSet = new Set();
    items.map(item =>
      Object.keys(item.values[0]).map(header => tableHeadersSet.add(header))
    );
    // From Set to Array
    const tableHeadersArray = Array.from(tableHeadersSet);

    return tableHeadersArray.map(header => (
      <TableValueHeader align="right" key={header as string}>
        {showHeadersText ? (header as string) : ''}
      </TableValueHeader>
    ));
  }

  return (
    <Base>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <TableTitle variant="h6">{props.title}</TableTitle>
              <TableSubtitle variant="caption">{props.subtitle}</TableSubtitle>
            </TableHeader>
            {valueHeaders(props.valueHeaders)}
          </TableRow>
        </TableHead>

        <TableBody>{listItems}</TableBody>
      </Table>
    </Base>
  );
};
