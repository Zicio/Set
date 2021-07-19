import Team from '../app';
import Character from '../character';

test('should add one character', () => {
  const first = new Character('Jack');
  const team = new Team();
  team.add(first);
  const expected = [{ name: 'Jack', attack: 25, defence: 25 }];
  expect(team.toArray()).toEqual(expected);
});

test('should give an error when adding the same character', () => {
  const first = new Character('Jack');
  const team = new Team();
  team.add(first);
  expect(() => team.add(first)).toThrow(new Error('Вы уже добавили этого персонажа'));
});

test('should add some characters', () => {
  const first = new Character('Jack');
  const second = new Character('Bob');
  const team = new Team();
  team.addAll(first, second);
  const expected = [{ name: 'Jack', attack: 25, defence: 25 }, { name: 'Bob', attack: 25, defence: 25 }];
  expect(team.toArray()).toEqual(expected);
});
