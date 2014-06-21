/** @jsx React.DOM */

var pagerInstance = (
    <Pager>
      <PageItem previous href="#">&larr; Previous Page</PageItem>
      <PageItem next href="#">Next Page &rarr;</PageItem>
    </Pager>
  );

React.renderComponent(pagerInstance, mountNode);