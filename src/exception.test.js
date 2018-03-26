import getRectArea from './exception';
  
it('It Trow is running', () => {
    expect(getRectArea).toThrow();
    
    // You can also use the exact error message or a regexp
    expect(getRectArea).toThrow('Parameter is not a number!');
    expect(getRectArea).toThrow(/Parameter/);
  });