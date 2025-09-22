using my.bookshop as my from '../db/schema';

service CatalogService {
  // @readonly
  @mcp: {
    name       : 'books',
    description: 'Book catalog with search and filteringaaaaaaaaa',
    resource   : [
      'filter',
      'orderby',
      'select',
      'top',
      'skip'
    ]
  }
  entity Books as projection on my.Books;

  // Optionally expose Books as tools for LLMs (query/get enabled by default config)
  annotate CatalogService.Books with @mcp.wrap: {
    tools: true,
    modes: [
      'query',
      'get'
    ],
    hint : 'Use for read-only lookups of books'
  };
}
