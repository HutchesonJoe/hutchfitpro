

describe('true is truthy and false is falsy', () =>{
  test('true is truthy', () => {
    expect(true).toBe(true);
  })

  test('false if falsy', ()=> {
    expect(false).toBe(false);
  })
});