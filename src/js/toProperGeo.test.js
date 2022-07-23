import toProperGeo from "./toProperGeo";

const strings = [
    '51.50851, −0.12572',
    '51.50851,−0.12572',
    '[51.50851, −0.12572]',
    '[51.50851, −0.12572',
    '51.50851, −0.12572]'
];

test('Testing, whether it convert to poper format', () => {
    let properStrings = [];
    strings.forEach(item => {
        properStrings.push(toProperGeo(item));
    });
    
    expect(properStrings).toEqual([
        '[51.50851, −0.12572]',
        '[51.50851, −0.12572]',
        '[51.50851, −0.12572]',
        '[51.50851, −0.12572]',
        '[51.50851, −0.12572]'
    ]);
});