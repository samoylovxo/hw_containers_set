/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
import Team from '../src/js/Team';

const warrior = { name: 'warrior', health: 50, attack: 25, defence: 25 };
const sniper = { name: 'sniper', health: 50, attack: 10, defence: 40 };
const medic = { name: 'medic', health: 50, attack: 15, defence: 20 };
const demon = { name: 'demon', health: 30, attack: 45, defence: 30 };

test('Test Team.add()', () => {
  const team = new Team();
  team.add(warrior);

  expect([...team.members]).toEqual([{ name: 'warrior', health: 50, attack: 25, defence: 25 }]);
});

test('Test Team.add() / Throw error', () => {
  const team = new Team();
  team.add(warrior);

  expect(() => team.add(warrior)).toThrow('Такой персонаж уже есть');
});

test('Test Team.addAll()', () => {
  const team = new Team();
  team.addAll(warrior, sniper, medic);

  expect([...team.members]).toEqual([
    { name: 'warrior', health: 50, attack: 25, defence: 25 },
    { name: 'sniper', health: 50, attack: 10, defence: 40 },
    { name: 'medic', health: 50, attack: 15, defence: 20 },
  ]);
});

test('Test Team.addAll() and Team.add()', () => {
  const team = new Team();
  team.addAll(warrior, sniper, medic);
  team.add(demon);

  expect([...team.members]).toEqual([
    { name: 'warrior', health: 50, attack: 25, defence: 25 },
    { name: 'sniper', health: 50, attack: 10, defence: 40 },
    { name: 'medic', health: 50, attack: 15, defence: 20 },
    { name: 'demon', health: 30, attack: 45, defence: 30 },
  ]);
});

test('Test Team.toArray()', () => {
  const team = new Team();
  team.addAll(warrior, sniper, medic, demon);

  expect(team.toArray()).toEqual([
    { name: 'warrior', health: 50, attack: 25, defence: 25 },
    { name: 'sniper', health: 50, attack: 10, defence: 40 },
    { name: 'medic', health: 50, attack: 15, defence: 20 },
    { name: 'demon', health: 30, attack: 45, defence: 30 },
  ]);
});
