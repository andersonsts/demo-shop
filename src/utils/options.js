export const PLOT_OPTIONS = Array.from(Array(12).keys()).map(item => ({
  value: item + 1,
  description: `${item + 1}x de ${Math.ceil(2400/(item + 1)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} sem juros`
}));