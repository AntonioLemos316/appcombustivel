// Const dividir feito em jest
const dividir = (x, y) => {
  return x / y;
}

const multiplicar = (x, y) => {
  return x * y;
}

// it = isto
describe('App Component', () => {
  it('foi dividido corretamente?', () => {
    expect(dividir(500, 5)).toBe(100);
  });

  it('foi multiplicado corretamente?', () => {
    expect(multiplicar(100, 5.99)).toBe(599.00);
  })
})

export default{};