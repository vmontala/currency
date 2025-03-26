import session from './session'

describe('Utils / storage / session', () => {
  describe('Stores and reads a value on the `sessionStorage`', () => {
    it('`null`', () => {
      const key = 'null';
      const value = null;

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('null');

      expect(session.get(key)).toBe(value);
    })

    it('boolean', () => {
      const key = 'boolean';
      const value = true;

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('true');

      expect(session.get(key)).toBe(value);
    })

    it('number', () => {
      const key = 'number';
      const value = 12.950;

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('12.95');

      expect(session.get(key)).toBe(value);
    })

    it('string', () => {
      const key = 'string';
      const value = 'test';

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('"test"');

      expect(session.get(key)).toBe(value);
    })

    it('object', () => {
      const key = 'object';
      const value = { key: 'value' };

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('{"key":"value"}');

      expect(session.get(key)).toEqual(value);
    })

    it('array', () => {
      const key = 'array';
      const value = [1, 2];

      session.set(key, value);

      expect(window.sessionStorage[key]).toBe('[1,2]');

      expect(session.get(key)).toEqual(value);
    })
  })
})
