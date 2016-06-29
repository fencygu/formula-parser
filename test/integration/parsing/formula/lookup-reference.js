import {Parser} from '../../../../src/parser';

describe('.parse() lookup-reference formulas', () => {
  let parser;

  beforeEach(() => {
    parser = new Parser();
  });
  afterEach(() => {
    parser = null;
  });

  it('MATCH', () => {
    parser.setVariable('foo', [0, 1, 2, 3, 4, 100, 7]);
    parser.setVariable('bar', ['jima', 'jimb', 'jimc', 'bernie']);

    expect(parser.parse('MATCH()')).to.deep.equal({error: '#N/A', result: null});
    expect(parser.parse('MATCH(1)')).to.deep.equal({error: '#N/A', result: null});
    expect(parser.parse('MATCH(1, foo)')).to.deep.equal({error: null, result: 2});
    expect(parser.parse('MATCH(4, foo, 1)')).to.deep.equal({error: null, result: 5});
    expect(parser.parse('MATCH("jima", bar, 0)')).to.deep.equal({error: null, result: 1});
    expect(parser.parse('MATCH("j?b", bar, 0)')).to.deep.equal({error: '#N/A', result: null});
    expect(parser.parse('MATCH("jimc", bar, 0)')).to.deep.equal({error: null, result: 3});
  });
});
