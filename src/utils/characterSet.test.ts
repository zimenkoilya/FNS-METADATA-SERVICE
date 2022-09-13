import avaTest, { ExecutionContext, TestInterface } from 'ava';
import { TestContext } from '../../mock/interface';
import { characterSet } from '../base';
import { findCharacterSet } from './characterSet';

const test = avaTest as TestInterface<TestContext>;

const getLabel = (name: string) => name.substring(0, name.indexOf('.'));

test('should retrieve letter character set for nick.eth', (t: ExecutionContext<TestContext>) => {
  const ENS = 'nick.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.LETTER);
});

test('should retrieve digit character set for 9898.eth', (t: ExecutionContext<TestContext>) => {
  const ENS = '9898.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.DIGIT);
});

test('should retrieve alphanumeric character set for 0xmatoken.eth', (t: ExecutionContext<TestContext>) => {
  const ENS = '0xmatoken.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve emoji character set for 👨🏻‍🚀👨🏻‍🚀👨🏻‍🚀.eth', (t: ExecutionContext<TestContext>) => {
  const ENS = '👨🏻‍🚀👨🏻‍🚀👨🏻‍🚀.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.EMOJI);
});

test('should retrieve alphanumeric character set for Japanese', (t: ExecutionContext<TestContext>) => {
  const ENS = '太陽.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Turkish', (t: ExecutionContext<TestContext>) => {
  const ENS = 'güneş.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Russian', (t: ExecutionContext<TestContext>) => {
  const ENS = 'солнце.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Hebrew', (t: ExecutionContext<TestContext>) => {
  const ENS = 'שמש.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Arabic', (t: ExecutionContext<TestContext>) => {
  const ENS = 'الشمس.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Korean', (t: ExecutionContext<TestContext>) => {
  const ENS = '태양.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for Chinese', (t: ExecutionContext<TestContext>) => {
  const ENS = '太陽.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.ALPHANUMERIC);
});

test('should retrieve alphanumeric character set for emoji + letters', (t: ExecutionContext<TestContext>) => {
  const ENS = '🥛shake.eth';
  const result = findCharacterSet(getLabel(ENS));
  t.is(result, characterSet.MIXED);
});

test('should retrieve emoji character set for given emojis', (t: ExecutionContext<TestContext>) => {
  const emojis = "🧑🏻‍❤️‍💋‍🧑🏼🧑🏻‍❤️‍💋‍🧑🏽🧑🏻‍❤️‍💋‍🧑🏾🧑🏻‍❤️‍💋‍🧑🏿🧑🏼‍❤️‍💋‍🧑🏻🧑🏼‍❤️‍💋‍🧑🏽🧑🏼‍❤️‍💋‍🧑🏾🧑🏼‍❤️‍💋‍🧑🏿🧑🏽‍❤️‍💋‍🧑🏻🧑🏽‍❤️‍💋‍🧑🏼🧑🏽‍❤️‍💋‍🧑🏾🧑🏽‍❤️‍💋‍🧑🏿🧑🏾‍❤️‍💋‍🧑🏻🧑🏾‍❤️‍💋‍🧑🏼🧑🏾‍❤️‍💋‍🧑🏽🧑🏾‍❤️‍💋‍🧑🏿🧑🏿‍❤️‍💋‍🧑🏻🧑🏿‍❤️‍💋‍🧑🏼🧑🏿‍❤️‍💋‍🧑🏽🧑🏿‍❤️‍💋‍🧑🏾👩🏻‍❤️‍💋‍👨🏻👩🏻‍❤️‍💋‍👨🏼👩🏻‍❤️‍💋‍👨🏽👩🏻‍❤️‍💋‍👨🏾👩🏻‍❤️‍💋‍👨🏿👩🏼‍❤️‍💋‍👨🏻👩🏼‍❤️‍💋‍👨🏼👩🏼‍❤️‍💋‍👨🏽👩🏼‍❤️‍💋‍👨🏾👩🏼‍❤️‍💋‍👨🏿👩🏽‍❤️‍💋‍👨🏻👩🏽‍❤️‍💋‍👨🏼👩🏽‍❤️‍💋‍👨🏽👩🏽‍❤️‍💋‍👨🏾👩🏽‍❤️‍💋‍👨🏿👩🏾‍❤️‍💋‍👨🏻👩🏾‍❤️‍💋‍👨🏼👩🏾‍❤️‍💋‍👨🏽👩🏾‍❤️‍💋‍👨🏾👩🏾‍❤️‍💋‍👨🏿👩🏿‍❤️‍💋‍👨🏻👩🏿‍❤️‍💋‍👨🏼👩🏿‍❤️‍💋‍👨🏽👩🏿‍❤️‍💋‍👨🏾👩🏿‍❤️‍💋‍👨🏿👨🏻‍❤️‍💋‍👨🏻👨🏻‍❤️‍💋‍👨🏼👨🏻‍❤️‍💋‍👨🏽👨🏻‍❤️‍💋‍👨🏾👨🏻‍❤️‍💋‍👨🏿👨🏼‍❤️‍💋‍👨🏻👨🏼‍❤️‍💋‍👨🏼👨🏼‍❤️‍💋‍👨🏽👨🏼‍❤️‍💋‍👨🏾👨🏼‍❤️‍💋‍👨🏿👨🏽‍❤️‍💋‍👨🏻👨🏽‍❤️‍💋‍👨🏼👨🏽‍❤️‍💋‍👨🏽👨🏽‍❤️‍💋‍👨🏾👨🏽‍❤️‍💋‍👨🏿👨🏾‍❤️‍💋‍👨🏻👨🏾‍❤️‍💋‍👨🏼👨🏾‍❤️‍💋‍👨🏽👨🏾‍❤️‍💋‍👨🏾👨🏾‍❤️‍💋‍👨🏿👨🏿‍❤️‍💋‍👨🏻👨🏿‍❤️‍💋‍👨🏼👨🏿‍❤️‍💋‍👨🏽👨🏿‍❤️‍💋‍👨🏾👨🏿‍❤️‍💋‍👨🏿👩🏻‍❤️‍💋‍👩🏻👩🏻‍❤️‍💋‍👩🏼👩🏻‍❤️‍💋‍👩🏽👩🏻‍❤️‍💋‍👩🏾👩🏻‍❤️‍💋‍👩🏿👩🏼‍❤️‍💋‍👩🏻👩🏼‍❤️‍💋‍👩🏼👩🏼‍❤️‍💋‍👩🏽👩🏼‍❤️‍💋‍👩🏾👩🏼‍❤️‍💋‍👩🏿👩🏽‍❤️‍💋‍👩🏻👩🏽‍❤️‍💋‍👩🏼👩🏽‍❤️‍💋‍👩🏽👩🏽‍❤️‍💋‍👩🏾👩🏽‍❤️‍💋‍👩🏿👩🏾‍❤️‍💋‍👩🏻👩🏾‍❤️‍💋‍👩🏼👩🏾‍❤️‍💋‍👩🏽👩🏾‍❤️‍💋‍👩🏾👩🏾‍❤️‍💋‍👩🏿👩🏿‍❤️‍💋‍👩🏻👩🏿‍❤️‍💋‍👩🏼👩🏿‍❤️‍💋‍👩🏽👩🏿‍❤️‍💋‍👩🏾👩🏿‍❤️‍💋‍👩🏿🏴󠁧󠁢󠁥󠁮󠁧󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁷󠁬󠁳󠁿🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏼🧑🏻‍🤝‍🧑🏽🧑🏻‍🤝‍🧑🏾🧑🏻‍🤝‍🧑🏿🧑🏼‍🤝‍🧑🏻🧑🏼‍🤝‍🧑🏼🧑🏼‍🤝‍🧑🏽🧑🏼‍🤝‍🧑🏾🧑🏼‍🤝‍🧑🏿🧑🏽‍🤝‍🧑🏻🧑🏽‍🤝‍🧑🏼🧑🏽‍🤝‍🧑🏽🧑🏽‍🤝‍🧑🏾🧑🏽‍🤝‍🧑🏿🧑🏾‍🤝‍🧑🏻🧑🏾‍🤝‍🧑🏼🧑🏾‍🤝‍🧑🏽🧑🏾‍🤝‍🧑🏾🧑🏾‍🤝‍🧑🏿🧑🏿‍🤝‍🧑🏻🧑🏿‍🤝‍🧑🏼🧑🏿‍🤝‍🧑🏽🧑🏿‍🤝‍🧑🏾🧑🏿‍🤝‍🧑🏿👩🏻‍🤝‍👩🏼👩🏻‍🤝‍👩🏽👩🏻‍🤝‍👩🏾👩🏻‍🤝‍👩🏿👩🏼‍🤝‍👩🏻👩🏼‍🤝‍👩🏽👩🏼‍🤝‍👩🏾👩🏼‍🤝‍👩🏿👩🏽‍🤝‍👩🏻👩🏽‍🤝‍👩🏼👩🏽‍🤝‍👩🏾👩🏽‍🤝‍👩🏿👩🏾‍🤝‍👩🏻👩🏾‍🤝‍👩🏼👩🏾‍🤝‍👩🏽👩🏾‍🤝‍👩🏿👩🏿‍🤝‍👩🏻👩🏿‍🤝‍👩🏼👩🏿‍🤝‍👩🏽👩🏿‍🤝‍👩🏾👩🏻‍🤝‍👨🏼👩🏻‍🤝‍👨🏽👩🏻‍🤝‍👨🏾👩🏻‍🤝‍👨🏿👩🏼‍🤝‍👨🏻👩🏼‍🤝‍👨🏽👩🏼‍🤝‍👨🏾👩🏼‍🤝‍👨🏿👩🏽‍🤝‍👨🏻👩🏽‍🤝‍👨🏼👩🏽‍🤝‍👨🏾👩🏽‍🤝‍👨🏿👩🏾‍🤝‍👨🏻👩🏾‍🤝‍👨🏼👩🏾‍🤝‍👨🏽👩🏾‍🤝‍👨🏿👩🏿‍🤝‍👨🏻👩🏿‍🤝‍👨🏼👩🏿‍🤝‍👨🏽👩🏿‍🤝‍👨🏾👨🏻‍🤝‍👨🏼👨🏻‍🤝‍👨🏽👨🏻‍🤝‍👨🏾👨🏻‍🤝‍👨🏿👨🏼‍🤝‍👨🏻👨🏼‍🤝‍👨🏽👨🏼‍🤝‍👨🏾👨🏼‍🤝‍👨🏿👨🏽‍🤝‍👨🏻👨🏽‍🤝‍👨🏼👨🏽‍🤝‍👨🏾👨🏽‍🤝‍👨🏿👨🏾‍🤝‍👨🏻👨🏾‍🤝‍👨🏼👨🏾‍🤝‍👨🏽👨🏾‍🤝‍👨🏿👨🏿‍🤝‍👨🏻👨🏿‍🤝‍👨🏼👨🏿‍🤝‍👨🏽👨🏿‍🤝‍👨🏾🧑🏻‍❤️‍🧑🏼🧑🏻‍❤️‍🧑🏽🧑🏻‍❤️‍🧑🏾🧑🏻‍❤️‍🧑🏿🧑🏼‍❤️‍🧑🏻🧑🏼‍❤️‍🧑🏽🧑🏼‍❤️‍🧑🏾🧑🏼‍❤️‍🧑🏿🧑🏽‍❤️‍🧑🏻🧑🏽‍❤️‍🧑🏼🧑🏽‍❤️‍🧑🏾🧑🏽‍❤️‍🧑🏿🧑🏾‍❤️‍🧑🏻🧑🏾‍❤️‍🧑🏼🧑🏾‍❤️‍🧑🏽🧑🏾‍❤️‍🧑🏿🧑🏿‍❤️‍🧑🏻🧑🏿‍❤️‍🧑🏼🧑🏿‍❤️‍🧑🏽🧑🏿‍❤️‍🧑🏾👩🏻‍❤️‍👨🏻👩🏻‍❤️‍👨🏼👩🏻‍❤️‍👨🏽👩🏻‍❤️‍👨🏾👩🏻‍❤️‍👨🏿👩🏼‍❤️‍👨🏻👩🏼‍❤️‍👨🏼👩🏼‍❤️‍👨🏽👩🏼‍❤️‍👨🏾👩🏼‍❤️‍👨🏿👩🏽‍❤️‍👨🏻👩🏽‍❤️‍👨🏼👩🏽‍❤️‍👨🏽👩🏽‍❤️‍👨🏾👩🏽‍❤️‍👨🏿👩🏾‍❤️‍👨🏻👩🏾‍❤️‍👨🏼👩🏾‍❤️‍👨🏽👩🏾‍❤️‍👨🏾👩🏾‍❤️‍👨🏿👩🏿‍❤️‍👨🏻👩🏿‍❤️‍👨🏼👩🏿‍❤️‍👨🏽👩🏿‍❤️‍👨🏾👩🏿‍❤️‍👨🏿👨🏻‍❤️‍👨🏻👨🏻‍❤️‍👨🏼👨🏻‍❤️‍👨🏽👨🏻‍❤️‍👨🏾👨🏻‍❤️‍👨🏿👨🏼‍❤️‍👨🏻👨🏼‍❤️‍👨🏼👨🏼‍❤️‍👨🏽👨🏼‍❤️‍👨🏾👨🏼‍❤️‍👨🏿👨🏽‍❤️‍👨🏻👨🏽‍❤️‍👨🏼👨🏽‍❤️‍👨🏽👨🏽‍❤️‍👨🏾👨🏽‍❤️‍👨🏿👨🏾‍❤️‍👨🏻👨🏾‍❤️‍👨🏼👨🏾‍❤️‍👨🏽👨🏾‍❤️‍👨🏾👨🏾‍❤️‍👨🏿👨🏿‍❤️‍👨🏻👨🏿‍❤️‍👨🏼👨🏿‍❤️‍👨🏽👨🏿‍❤️‍👨🏾👨🏿‍❤️‍👨🏿👩🏻‍❤️‍👩🏻👩🏻‍❤️‍👩🏼👩🏻‍❤️‍👩🏽👩🏻‍❤️‍👩🏾👩🏻‍❤️‍👩🏿👩🏼‍❤️‍👩🏻👩🏼‍❤️‍👩🏼👩🏼‍❤️‍👩🏽👩🏼‍❤️‍👩🏾👩🏼‍❤️‍👩🏿👩🏽‍❤️‍👩🏻👩🏽‍❤️‍👩🏼👩🏽‍❤️‍👩🏽👩🏽‍❤️‍👩🏾👩🏽‍❤️‍👩🏿👩🏾‍❤️‍👩🏻👩🏾‍❤️‍👩🏼👩🏾‍❤️‍👩🏽👩🏾‍❤️‍👩🏾👩🏾‍❤️‍👩🏿👩🏿‍❤️‍👩🏻👩🏿‍❤️‍👩🏼👩🏿‍❤️‍👩🏽👩🏿‍❤️‍👩🏾👩🏿‍❤️‍👩🏿👩‍❤️‍💋‍👨👨‍❤️‍💋‍👨👩‍❤️‍💋‍👩👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧🧑‍🤝‍🧑👩‍❤️‍👨👨‍❤️‍👨👩‍❤️‍👩👨‍👩‍👦👨‍👩‍👧👨‍👨‍👦👨‍👨‍👧👩‍👩‍👦👩‍👩‍👧👨‍👦‍👦👨‍👧‍👦👨‍👧‍👧👩‍👦‍👦👩‍👧‍👦👩‍👧‍👧👁️‍🗨️🧔🏻‍♂️🧔🏼‍♂️🧔🏽‍♂️🧔🏾‍♂️🧔🏿‍♂️🧔🏻‍♀️🧔🏼‍♀️🧔🏽‍♀️🧔🏾‍♀️🧔🏿‍♀️👨🏻‍🦰👨🏼‍🦰👨🏽‍🦰👨🏾‍🦰👨🏿‍🦰👨🏻‍🦱👨🏼‍🦱👨🏽‍🦱👨🏾‍🦱👨🏿‍🦱👨🏻‍🦳👨🏼‍🦳👨🏽‍🦳👨🏾‍🦳👨🏿‍🦳👨🏻‍🦲👨🏼‍🦲👨🏽‍🦲👨🏾‍🦲👨🏿‍🦲👩🏻‍🦰👩🏼‍🦰👩🏽‍🦰👩🏾‍🦰👩🏿‍🦰🧑🏻‍🦰🧑🏼‍🦰🧑🏽‍🦰🧑🏾‍🦰🧑🏿‍🦰👩🏻‍🦱👩🏼‍🦱👩🏽‍🦱👩🏾‍🦱👩🏿‍🦱🧑🏻‍🦱🧑🏼‍🦱🧑🏽‍🦱🧑🏾‍🦱🧑🏿‍🦱👩🏻‍🦳👩🏼‍🦳👩🏽‍🦳👩🏾‍🦳👩🏿‍🦳🧑🏻‍🦳🧑🏼‍🦳🧑🏽‍🦳🧑🏾‍🦳🧑🏿‍🦳👩🏻‍🦲👩🏼‍🦲👩🏽‍🦲👩🏾‍🦲👩🏿‍🦲🧑🏻‍🦲🧑🏼‍🦲🧑🏽‍🦲🧑🏾‍🦲🧑🏿‍🦲👱🏻‍♀️👱🏼‍♀️👱🏽‍♀️👱🏾‍♀️👱🏿‍♀️👱🏻‍♂️👱🏼‍♂️👱🏽‍♂️👱🏾‍♂️👱🏿‍♂️🙍🏻‍♂️🙍🏼‍♂️🙍🏽‍♂️🙍🏾‍♂️🙍🏿‍♂️🙍🏻‍♀️🙍🏼‍♀️🙍🏽‍♀️🙍🏾‍♀️🙍🏿‍♀️🙎🏻‍♂️🙎🏼‍♂️🙎🏽‍♂️🙎🏾‍♂️🙎🏿‍♂️🙎🏻‍♀️🙎🏼‍♀️🙎🏽‍♀️🙎🏾‍♀️🙎🏿‍♀️🙅🏻‍♂️🙅🏼‍♂️🙅🏽‍♂️🙅🏾‍♂️🙅🏿‍♂️🙅🏻‍♀️🙅🏼‍♀️🙅🏽‍♀️🙅🏾‍♀️🙅🏿‍♀️🙆🏻‍♂️🙆🏼‍♂️🙆🏽‍♂️🙆🏾‍♂️🙆🏿‍♂️🙆🏻‍♀️🙆🏼‍♀️🙆🏽‍♀️🙆🏾‍♀️🙆🏿‍♀️💁🏻‍♂️💁🏼‍♂️💁🏽‍♂️💁🏾‍♂️💁🏿‍♂️💁🏻‍♀️💁🏼‍♀️💁🏽‍♀️💁🏾‍♀️💁🏿‍♀️🙋🏻‍♂️🙋🏼‍♂️🙋🏽‍♂️🙋🏾‍♂️🙋🏿‍♂️🙋🏻‍♀️🙋🏼‍♀️🙋🏽‍♀️🙋🏾‍♀️🙋🏿‍♀️🧏🏻‍♂️🧏🏼‍♂️🧏🏽‍♂️🧏🏾‍♂️🧏🏿‍♂️🧏🏻‍♀️🧏🏼‍♀️🧏🏽‍♀️🧏🏾‍♀️🧏🏿‍♀️🙇🏻‍♂️🙇🏼‍♂️🙇🏽‍♂️🙇🏾‍♂️🙇🏿‍♂️🙇🏻‍♀️🙇🏼‍♀️🙇🏽‍♀️🙇🏾‍♀️🙇🏿‍♀️🤦🏻‍♂️🤦🏼‍♂️🤦🏽‍♂️🤦🏾‍♂️🤦🏿‍♂️🤦🏻‍♀️🤦🏼‍♀️🤦🏽‍♀️🤦🏾‍♀️🤦🏿‍♀️🤷🏻‍♂️🤷🏼‍♂️🤷🏽‍♂️🤷🏾‍♂️🤷🏿‍♂️🤷🏻‍♀️🤷🏼‍♀️🤷🏽‍♀️🤷🏾‍♀️🤷🏿‍♀️🧑🏻‍⚕️🧑🏼‍⚕️🧑🏽‍⚕️🧑🏾‍⚕️🧑🏿‍⚕️👨🏻‍⚕️👨🏼‍⚕️👨🏽‍⚕️👨🏾‍⚕️👨🏿‍⚕️👩🏻‍⚕️👩🏼‍⚕️👩🏽‍⚕️👩🏾‍⚕️👩🏿‍⚕️🧑🏻‍🎓🧑🏼‍🎓🧑🏽‍🎓🧑🏾‍🎓🧑🏿‍🎓👨🏻‍🎓👨🏼‍🎓👨🏽‍🎓👨🏾‍🎓👨🏿‍🎓👩🏻‍🎓👩🏼‍🎓👩🏽‍🎓👩🏾‍🎓👩🏿‍🎓🧑🏻‍🏫🧑🏼‍🏫🧑🏽‍🏫🧑🏾‍🏫🧑🏿‍🏫👨🏻‍🏫👨🏼‍🏫👨🏽‍🏫👨🏾‍🏫👨🏿‍🏫👩🏻‍🏫👩🏼‍🏫👩🏽‍🏫👩🏾‍🏫👩🏿‍🏫🧑🏻‍⚖️🧑🏼‍⚖️🧑🏽‍⚖️🧑🏾‍⚖️🧑🏿‍⚖️👨🏻‍⚖️👨🏼‍⚖️👨🏽‍⚖️👨🏾‍⚖️👨🏿‍⚖️👩🏻‍⚖️👩🏼‍⚖️👩🏽‍⚖️👩🏾‍⚖️👩🏿‍⚖️🧑🏻‍🌾🧑🏼‍🌾🧑🏽‍🌾🧑🏾‍🌾🧑🏿‍🌾👨🏻‍🌾👨🏼‍🌾👨🏽‍🌾👨🏾‍🌾👨🏿‍🌾👩🏻‍🌾👩🏼‍🌾👩🏽‍🌾👩🏾‍🌾👩🏿‍🌾🧑🏻‍🍳🧑🏼‍🍳🧑🏽‍🍳🧑🏾‍🍳🧑🏿‍🍳👨🏻‍🍳👨🏼‍🍳👨🏽‍🍳👨🏾‍🍳👨🏿‍🍳👩🏻‍🍳👩🏼‍🍳👩🏽‍🍳👩🏾‍🍳👩🏿‍🍳🧑🏻‍🔧🧑🏼‍🔧🧑🏽‍🔧🧑🏾‍🔧🧑🏿‍🔧👨🏻‍🔧👨🏼‍🔧👨🏽‍🔧👨🏾‍🔧👨🏿‍🔧👩🏻‍🔧👩🏼‍🔧👩🏽‍🔧👩🏾‍🔧👩🏿‍🔧🧑🏻‍🏭🧑🏼‍🏭🧑🏽‍🏭🧑🏾‍🏭🧑🏿‍🏭👨🏻‍🏭👨🏼‍🏭👨🏽‍🏭👨🏾‍🏭👨🏿‍🏭👩🏻‍🏭👩🏼‍🏭👩🏽‍🏭👩🏾‍🏭👩🏿‍🏭🧑🏻‍💼🧑🏼‍💼🧑🏽‍💼🧑🏾‍💼🧑🏿‍💼👨🏻‍💼👨🏼‍💼👨🏽‍💼👨🏾‍💼👨🏿‍💼👩🏻‍💼👩🏼‍💼👩🏽‍💼👩🏾‍💼👩🏿‍💼🧑🏻‍🔬🧑🏼‍🔬🧑🏽‍🔬🧑🏾‍🔬🧑🏿‍🔬👨🏻‍🔬👨🏼‍🔬👨🏽‍🔬👨🏾‍🔬👨🏿‍🔬👩🏻‍🔬👩🏼‍🔬👩🏽‍🔬👩🏾‍🔬👩🏿‍🔬🧑🏻‍💻🧑🏼‍💻🧑🏽‍💻🧑🏾‍💻🧑🏿‍💻👨🏻‍💻👨🏼‍💻👨🏽‍💻👨🏾‍💻👨🏿‍💻👩🏻‍💻👩🏼‍💻👩🏽‍💻👩🏾‍💻👩🏿‍💻🧑🏻‍🎤🧑🏼‍🎤🧑🏽‍🎤🧑🏾‍🎤🧑🏿‍🎤👨🏻‍🎤👨🏼‍🎤👨🏽‍🎤👨🏾‍🎤👨🏿‍🎤👩🏻‍🎤👩🏼‍🎤👩🏽‍🎤👩🏾‍🎤👩🏿‍🎤🧑🏻‍🎨🧑🏼‍🎨🧑🏽‍🎨🧑🏾‍🎨🧑🏿‍🎨👨🏻‍🎨👨🏼‍🎨👨🏽‍🎨👨🏾‍🎨👨🏿‍🎨👩🏻‍🎨👩🏼‍🎨👩🏽‍🎨👩🏾‍🎨👩🏿‍🎨🧑🏻‍✈️🧑🏼‍✈️🧑🏽‍✈️🧑🏾‍✈️🧑🏿‍✈️👨🏻‍✈️👨🏼‍✈️👨🏽‍✈️👨🏾‍✈️👨🏿‍✈️👩🏻‍✈️👩🏼‍✈️👩🏽‍✈️👩🏾‍✈️👩🏿‍✈️🧑🏻‍🚀🧑🏼‍🚀🧑🏽‍🚀🧑🏾‍🚀🧑🏿‍🚀👨🏻‍🚀👨🏼‍🚀👨🏽‍🚀👨🏾‍🚀👨🏿‍🚀👩🏻‍🚀👩🏼‍🚀👩🏽‍🚀👩🏾‍🚀👩🏿‍🚀🧑🏻‍🚒🧑🏼‍🚒🧑🏽‍🚒🧑🏾‍🚒🧑🏿‍🚒👨🏻‍🚒👨🏼‍🚒👨🏽‍🚒👨🏾‍🚒👨🏿‍🚒👩🏻‍🚒👩🏼‍🚒👩🏽‍🚒👩🏾‍🚒👩🏿‍🚒👮🏻‍♂️👮🏼‍♂️👮🏽‍♂️👮🏾‍♂️👮🏿‍♂️👮🏻‍♀️👮🏼‍♀️👮🏽‍♀️👮🏾‍♀️👮🏿‍♀️🕵🏻‍♂️🕵🏼‍♂️🕵🏽‍♂️🕵🏾‍♂️🕵🏿‍♂️🕵🏻‍♀️🕵🏼‍♀️🕵🏽‍♀️🕵🏾‍♀️🕵🏿‍♀️💂🏻‍♂️💂🏼‍♂️💂🏽‍♂️💂🏾‍♂️💂🏿‍♂️💂🏻‍♀️💂🏼‍♀️💂🏽‍♀️💂🏾‍♀️💂🏿‍♀️👷🏻‍♂️👷🏼‍♂️👷🏽‍♂️👷🏾‍♂️👷🏿‍♂️👷🏻‍♀️👷🏼‍♀️👷🏽‍♀️👷🏾‍♀️👷🏿‍♀️👳🏻‍♂️👳🏼‍♂️👳🏽‍♂️👳🏾‍♂️👳🏿‍♂️👳🏻‍♀️👳🏼‍♀️👳🏽‍♀️👳🏾‍♀️👳🏿‍♀️🤵🏻‍♂️🤵🏼‍♂️🤵🏽‍♂️🤵🏾‍♂️🤵🏿‍♂️🤵🏻‍♀️🤵🏼‍♀️🤵🏽‍♀️🤵🏾‍♀️🤵🏿‍♀️👰🏻‍♂️👰🏼‍♂️👰🏽‍♂️👰🏾‍♂️👰🏿‍♂️👰🏻‍♀️👰🏼‍♀️👰🏽‍♀️👰🏾‍♀️👰🏿‍♀️👩🏻‍🍼👩🏼‍🍼👩🏽‍🍼👩🏾‍🍼👩🏿‍🍼👨🏻‍🍼👨🏼‍🍼👨🏽‍🍼👨🏾‍🍼👨🏿‍🍼🧑🏻‍🍼🧑🏼‍🍼🧑🏽‍🍼🧑🏾‍🍼🧑🏿‍🍼🧑🏻‍🎄🧑🏼‍🎄🧑🏽‍🎄🧑🏾‍🎄🧑🏿‍🎄🦸🏻‍♂️🦸🏼‍♂️🦸🏽‍♂️🦸🏾‍♂️🦸🏿‍♂️🦸🏻‍♀️🦸🏼‍♀️🦸🏽‍♀️🦸🏾‍♀️🦸🏿‍♀️🦹🏻‍♂️🦹🏼‍♂️🦹🏽‍♂️🦹🏾‍♂️🦹🏿‍♂️🦹🏻‍♀️🦹🏼‍♀️🦹🏽‍♀️🦹🏾‍♀️🦹🏿‍♀️🧙🏻‍♂️🧙🏼‍♂️🧙🏽‍♂️🧙🏾‍♂️🧙🏿‍♂️🧙🏻‍♀️🧙🏼‍♀️🧙🏽‍♀️🧙🏾‍♀️🧙🏿‍♀️🧚🏻‍♂️🧚🏼‍♂️🧚🏽‍♂️🧚🏾‍♂️🧚🏿‍♂️🧚🏻‍♀️🧚🏼‍♀️🧚🏽‍♀️🧚🏾‍♀️🧚🏿‍♀️🧛🏻‍♂️🧛🏼‍♂️🧛🏽‍♂️🧛🏾‍♂️🧛🏿‍♂️🧛🏻‍♀️🧛🏼‍♀️🧛🏽‍♀️🧛🏾‍♀️🧛🏿‍♀️🧜🏻‍♂️🧜🏼‍♂️🧜🏽‍♂️🧜🏾‍♂️🧜🏿‍♂️🧜🏻‍♀️🧜🏼‍♀️🧜🏽‍♀️🧜🏾‍♀️🧜🏿‍♀️🧝🏻‍♂️🧝🏼‍♂️🧝🏽‍♂️🧝🏾‍♂️🧝🏿‍♂️🧝🏻‍♀️🧝🏼‍♀️🧝🏽‍♀️🧝🏾‍♀️🧝🏿‍♀️💆🏻‍♂️💆🏼‍♂️💆🏽‍♂️💆🏾‍♂️💆🏿‍♂️💆🏻‍♀️💆🏼‍♀️💆🏽‍♀️💆🏾‍♀️💆🏿‍♀️💇🏻‍♂️💇🏼‍♂️💇🏽‍♂️💇🏾‍♂️💇🏿‍♂️💇🏻‍♀️💇🏼‍♀️💇🏽‍♀️💇🏾‍♀️💇🏿‍♀️🚶🏻‍♂️🚶🏼‍♂️🚶🏽‍♂️🚶🏾‍♂️🚶🏿‍♂️🚶🏻‍♀️🚶🏼‍♀️🚶🏽‍♀️🚶🏾‍♀️🚶🏿‍♀️🧍🏻‍♂️🧍🏼‍♂️🧍🏽‍♂️🧍🏾‍♂️🧍🏿‍♂️🧍🏻‍♀️🧍🏼‍♀️🧍🏽‍♀️🧍🏾‍♀️🧍🏿‍♀️🧎🏻‍♂️🧎🏼‍♂️🧎🏽‍♂️🧎🏾‍♂️🧎🏿‍♂️🧎🏻‍♀️🧎🏼‍♀️🧎🏽‍♀️🧎🏾‍♀️🧎🏿‍♀️🧑🏻‍🦯🧑🏼‍🦯🧑🏽‍🦯🧑🏾‍🦯🧑🏿‍🦯👨🏻‍🦯👨🏼‍🦯👨🏽‍🦯👨🏾‍🦯👨🏿‍🦯👩🏻‍🦯👩🏼‍🦯👩🏽‍🦯👩🏾‍🦯👩🏿‍🦯🧑🏻‍🦼🧑🏼‍🦼🧑🏽‍🦼🧑🏾‍🦼🧑🏿‍🦼👨🏻‍🦼👨🏼‍🦼👨🏽‍🦼👨🏾‍🦼👨🏿‍🦼👩🏻‍🦼👩🏼‍🦼👩🏽‍🦼👩🏾‍🦼👩🏿‍🦼🧑🏻‍🦽🧑🏼‍🦽🧑🏽‍🦽🧑🏾‍🦽🧑🏿‍🦽👨🏻‍🦽👨🏼‍🦽👨🏽‍🦽👨🏾‍🦽👨🏿‍🦽👩🏻‍🦽👩🏼‍🦽👩🏽‍🦽👩🏾‍🦽👩🏿‍🦽🏃🏻‍♂️🏃🏼‍♂️🏃🏽‍♂️🏃🏾‍♂️🏃🏿‍♂️🏃🏻‍♀️🏃🏼‍♀️🏃🏽‍♀️🏃🏾‍♀️🏃🏿‍♀️🧖🏻‍♂️🧖🏼‍♂️🧖🏽‍♂️🧖🏾‍♂️🧖🏿‍♂️🧖🏻‍♀️🧖🏼‍♀️🧖🏽‍♀️🧖🏾‍♀️🧖🏿‍♀️🧗🏻‍♂️🧗🏼‍♂️🧗🏽‍♂️🧗🏾‍♂️🧗🏿‍♂️🧗🏻‍♀️🧗🏼‍♀️🧗🏽‍♀️🧗🏾‍♀️🧗🏿‍♀️🏌🏻‍♂️🏌🏼‍♂️🏌🏽‍♂️🏌🏾‍♂️🏌🏿‍♂️🏌🏻‍♀️🏌🏼‍♀️🏌🏽‍♀️🏌🏾‍♀️🏌🏿‍♀️🏄🏻‍♂️🏄🏼‍♂️🏄🏽‍♂️🏄🏾‍♂️🏄🏿‍♂️🏄🏻‍♀️🏄🏼‍♀️🏄🏽‍♀️🏄🏾‍♀️🏄🏿‍♀️🚣🏻‍♂️🚣🏼‍♂️🚣🏽‍♂️🚣🏾‍♂️🚣🏿‍♂️🚣🏻‍♀️🚣🏼‍♀️🚣🏽‍♀️🚣🏾‍♀️🚣🏿‍♀️🏊🏻‍♂️🏊🏼‍♂️🏊🏽‍♂️🏊🏾‍♂️🏊🏿‍♂️🏊🏻‍♀️🏊🏼‍♀️🏊🏽‍♀️🏊🏾‍♀️🏊🏿‍♀️🏋🏻‍♂️🏋🏼‍♂️🏋🏽‍♂️🏋🏾‍♂️🏋🏿‍♂️🏋🏻‍♀️🏋🏼‍♀️🏋🏽‍♀️🏋🏾‍♀️🏋🏿‍♀️🚴🏻‍♂️🚴🏼‍♂️🚴🏽‍♂️🚴🏾‍♂️🚴🏿‍♂️🚴🏻‍♀️🚴🏼‍♀️🚴🏽‍♀️🚴🏾‍♀️🚴🏿‍♀️🚵🏻‍♂️🚵🏼‍♂️🚵🏽‍♂️🚵🏾‍♂️🚵🏿‍♂️🚵🏻‍♀️🚵🏼‍♀️🚵🏽‍♀️🚵🏾‍♀️🚵🏿‍♀️🤸🏻‍♂️🤸🏼‍♂️🤸🏽‍♂️🤸🏾‍♂️🤸🏿‍♂️🤸🏻‍♀️🤸🏼‍♀️🤸🏽‍♀️🤸🏾‍♀️🤸🏿‍♀️🤽🏻‍♂️🤽🏼‍♂️🤽🏽‍♂️🤽🏾‍♂️🤽🏿‍♂️🤽🏻‍♀️🤽🏼‍♀️🤽🏽‍♀️🤽🏾‍♀️🤽🏿‍♀️🤾🏻‍♂️🤾🏼‍♂️🤾🏽‍♂️🤾🏾‍♂️🤾🏿‍♂️🤾🏻‍♀️🤾🏼‍♀️🤾🏽‍♀️🤾🏾‍♀️🤾🏿‍♀️🤹🏻‍♂️🤹🏼‍♂️🤹🏽‍♂️🤹🏾‍♂️🤹🏿‍♂️🤹🏻‍♀️🤹🏼‍♀️🤹🏽‍♀️🤹🏾‍♀️🤹🏿‍♀️🧘🏻‍♂️🧘🏼‍♂️🧘🏽‍♂️🧘🏾‍♂️🧘🏿‍♂️🧘🏻‍♀️🧘🏼‍♀️🧘🏽‍♀️🧘🏾‍♀️🧘🏿‍♀️😶‍🌫️🕵️‍♂️🕵️‍♀️🏌️‍♂️🏌️‍♀️🏋️‍♂️🏋️‍♀️🏳️‍🌈🏳️‍⚧️⛹🏻‍♂️⛹🏼‍♂️⛹🏽‍♂️⛹🏾‍♂️⛹🏿‍♂️⛹🏻‍♀️⛹🏼‍♀️⛹🏽‍♀️⛹🏾‍♀️⛹🏿‍♀️😮‍💨😵‍💫❤️‍🔥❤️‍🩹🧔‍♂️🧔‍♀️👨‍🦰👨‍🦱👨‍🦳👨‍🦲👩‍🦰🧑‍🦰👩‍🦱🧑‍🦱👩‍🦳🧑‍🦳👩‍🦲🧑‍🦲👱‍♀️👱‍♂️🙍‍♂️🙍‍♀️🙎‍♂️🙎‍♀️🙅‍♂️🙅‍♀️🙆‍♂️🙆‍♀️💁‍♂️💁‍♀️🙋‍♂️🙋‍♀️🧏‍♂️🧏‍♀️🙇‍♂️🙇‍♀️🤦‍♂️🤦‍♀️🤷‍♂️🤷‍♀️🧑‍⚕️👨‍⚕️👩‍⚕️🧑‍🎓👨‍🎓👩‍🎓🧑‍🏫👨‍🏫👩‍🏫🧑‍⚖️👨‍⚖️👩‍⚖️🧑‍🌾👨‍🌾👩‍🌾🧑‍🍳👨‍🍳👩‍🍳🧑‍🔧👨‍🔧👩‍🔧🧑‍🏭👨‍🏭👩‍🏭🧑‍💼👨‍💼👩‍💼🧑‍🔬👨‍🔬👩‍🔬🧑‍💻👨‍💻👩‍💻🧑‍🎤👨‍🎤👩‍🎤🧑‍🎨👨‍🎨👩‍🎨🧑‍✈️👨‍✈️👩‍✈️🧑‍🚀👨‍🚀👩‍🚀🧑‍🚒👨‍🚒👩‍🚒👮‍♂️👮‍♀️💂‍♂️💂‍♀️👷‍♂️👷‍♀️👳‍♂️👳‍♀️🤵‍♂️🤵‍♀️👰‍♂️👰‍♀️👩‍🍼👨‍🍼🧑‍🍼🧑‍🎄🦸‍♂️🦸‍♀️🦹‍♂️🦹‍♀️🧙‍♂️🧙‍♀️🧚‍♂️🧚‍♀️🧛‍♂️🧛‍♀️🧜‍♂️🧜‍♀️🧝‍♂️🧝‍♀️🧞‍♂️🧞‍♀️🧟‍♂️🧟‍♀️💆‍♂️💆‍♀️💇‍♂️💇‍♀️🚶‍♂️🚶‍♀️🧍‍♂️🧍‍♀️🧎‍♂️🧎‍♀️🧑‍🦯👨‍🦯👩‍🦯🧑‍🦼👨‍🦼👩‍🦼🧑‍🦽👨‍🦽👩‍🦽🏃‍♂️🏃‍♀️👯‍♂️👯‍♀️🧖‍♂️🧖‍♀️🧗‍♂️🧗‍♀️🏄‍♂️🏄‍♀️🚣‍♂️🚣‍♀️🏊‍♂️🏊‍♀️⛹️‍♂️⛹️‍♀️🚴‍♂️🚴‍♀️🚵‍♂️🚵‍♀️🤸‍♂️🤸‍♀️🤼‍♂️🤼‍♀️🤽‍♂️🤽‍♀️🤾‍♂️🤾‍♀️🤹‍♂️🤹‍♀️🧘‍♂️🧘‍♀️👨‍👦👨‍👧👩‍👦👩‍👧🐕‍🦺🐻‍❄️🏴‍☠️🐈‍⬛🇦🇨🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇶🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇱🇧🇲🇧🇳🇧🇴🇧🇶🇧🇷🇧🇸🇧🇹🇧🇻🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇵🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇲🇭🇳🇭🇷🇭🇹🇭🇺🇮🇨🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇴🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇫🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇶🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇨🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇲🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇪🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇭🇸🇮🇸🇯🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇦🇹🇨🇹🇩🇹🇫🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇲🇺🇳🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇫🇼🇸🇽🇰🇾🇪🇾🇹🇿🇦🇿🇲🇿🇼👋🏻👋🏼👋🏽👋🏾👋🏿🤚🏻🤚🏼🤚🏽🤚🏾🤚🏿🖐🏻🖐🏼🖐🏽🖐🏾🖐🏿🖖🏻🖖🏼🖖🏽🖖🏾🖖🏿👌🏻👌🏼👌🏽👌🏾👌🏿🤌🏻🤌🏼🤌🏽🤌🏾🤌🏿🤏🏻🤏🏼🤏🏽🤏🏾🤏🏿🤞🏻🤞🏼🤞🏽🤞🏾🤞🏿🤟🏻🤟🏼🤟🏽🤟🏾🤟🏿🤘🏻🤘🏼🤘🏽🤘🏾🤘🏿🤙🏻🤙🏼🤙🏽🤙🏾🤙🏿👈🏻👈🏼👈🏽👈🏾👈🏿👉🏻👉🏼👉🏽👉🏾👉🏿👆🏻👆🏼👆🏽👆🏾👆🏿🖕🏻🖕🏼🖕🏽🖕🏾🖕🏿👇🏻👇🏼👇🏽👇🏾👇🏿👍🏻👍🏼👍🏽👍🏾👍🏿👎🏻👎🏼👎🏽👎🏾👎🏿👊🏻👊🏼👊🏽👊🏾👊🏿🤛🏻🤛🏼🤛🏽🤛🏾🤛🏿🤜🏻🤜🏼🤜🏽🤜🏾🤜🏿👏🏻👏🏼👏🏽👏🏾👏🏿🙌🏻🙌🏼🙌🏽🙌🏾🙌🏿👐🏻👐🏼👐🏽👐🏾👐🏿🤲🏻🤲🏼🤲🏽🤲🏾🤲🏿🙏🏻🙏🏼🙏🏽🙏🏾🙏🏿💅🏻💅🏼💅🏽💅🏾💅🏿🤳🏻🤳🏼🤳🏽🤳🏾🤳🏿💪🏻💪🏼💪🏽💪🏾💪🏿🦵🏻🦵🏼🦵🏽🦵🏾🦵🏿🦶🏻🦶🏼🦶🏽🦶🏾🦶🏿👂🏻👂🏼👂🏽👂🏾👂🏿🦻🏻🦻🏼🦻🏽🦻🏾🦻🏿👃🏻👃🏼👃🏽👃🏾👃🏿👶🏻👶🏼👶🏽👶🏾👶🏿🧒🏻🧒🏼🧒🏽🧒🏾🧒🏿👦🏻👦🏼👦🏽👦🏾👦🏿👧🏻👧🏼👧🏽👧🏾👧🏿🧑🏻🧑🏼🧑🏽🧑🏾🧑🏿👱🏻👱🏼👱🏽👱🏾👱🏿👨🏻👨🏼👨🏽👨🏾👨🏿🧔🏻🧔🏼🧔🏽🧔🏾🧔🏿👩🏻👩🏼👩🏽👩🏾👩🏿🧓🏻🧓🏼🧓🏽🧓🏾🧓🏿👴🏻👴🏼👴🏽👴🏾👴🏿👵🏻👵🏼👵🏽👵🏾👵🏿🙍🏻🙍🏼🙍🏽🙍🏾🙍🏿🙎🏻🙎🏼🙎🏽🙎🏾🙎🏿🙅🏻🙅🏼🙅🏽🙅🏾🙅🏿🙆🏻🙆🏼🙆🏽🙆🏾🙆🏿💁🏻💁🏼💁🏽💁🏾💁🏿🙋🏻🙋🏼🙋🏽🙋🏾🙋🏿🧏🏻🧏🏼🧏🏽🧏🏾🧏🏿🙇🏻🙇🏼🙇🏽🙇🏾🙇🏿🤦🏻🤦🏼🤦🏽🤦🏾🤦🏿🤷🏻🤷🏼🤷🏽🤷🏾🤷🏿👮🏻👮🏼👮🏽👮🏾👮🏿🕵🏻🕵🏼🕵🏽🕵🏾🕵🏿💂🏻💂🏼💂🏽💂🏾💂🏿🥷🏻🥷🏼🥷🏽🥷🏾🥷🏿👷🏻👷🏼👷🏽👷🏾👷🏿🤴🏻🤴🏼🤴🏽🤴🏾🤴🏿👸🏻👸🏼👸🏽👸🏾👸🏿👳🏻👳🏼👳🏽👳🏾👳🏿👲🏻👲🏼👲🏽👲🏾👲🏿🧕🏻🧕🏼🧕🏽🧕🏾🧕🏿🤵🏻🤵🏼🤵🏽🤵🏾🤵🏿👰🏻👰🏼👰🏽👰🏾👰🏿🤰🏻🤰🏼🤰🏽🤰🏾🤰🏿🤱🏻🤱🏼🤱🏽🤱🏾🤱🏿👼🏻👼🏼👼🏽👼🏾👼🏿🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿🤶🏻🤶🏼🤶🏽🤶🏾🤶🏿🦸🏻🦸🏼🦸🏽🦸🏾🦸🏿🦹🏻🦹🏼🦹🏽🦹🏾🦹🏿🧙🏻🧙🏼🧙🏽🧙🏾🧙🏿🧚🏻🧚🏼🧚🏽🧚🏾🧚🏿🧛🏻🧛🏼🧛🏽🧛🏾🧛🏿🧜🏻🧜🏼🧜🏽🧜🏾🧜🏿🧝🏻🧝🏼🧝🏽🧝🏾🧝🏿💆🏻💆🏼💆🏽💆🏾💆🏿💇🏻💇🏼💇🏽💇🏾💇🏿🚶🏻🚶🏼🚶🏽🚶🏾🚶🏿🧍🏻🧍🏼🧍🏽🧍🏾🧍🏿🧎🏻🧎🏼🧎🏽🧎🏾🧎🏿🏃🏻🏃🏼🏃🏽🏃🏾🏃🏿💃🏻💃🏼💃🏽💃🏾💃🏿🕺🏻🕺🏼🕺🏽🕺🏾🕺🏿🕴🏻🕴🏼🕴🏽🕴🏾🕴🏿🧖🏻🧖🏼🧖🏽🧖🏾🧖🏿🧗🏻🧗🏼🧗🏽🧗🏾🧗🏿🏇🏻🏇🏼🏇🏽🏇🏾🏇🏿🏂🏻🏂🏼🏂🏽🏂🏾🏂🏿🏌🏻🏌🏼🏌🏽🏌🏾🏌🏿🏄🏻🏄🏼🏄🏽🏄🏾🏄🏿🚣🏻🚣🏼🚣🏽🚣🏾🚣🏿🏊🏻🏊🏼🏊🏽🏊🏾🏊🏿🏋🏻🏋🏼🏋🏽🏋🏾🏋🏿🚴🏻🚴🏼🚴🏽🚴🏾🚴🏿🚵🏻🚵🏼🚵🏽🚵🏾🚵🏿🤸🏻🤸🏼🤸🏽🤸🏾🤸🏿🤽🏻🤽🏼🤽🏽🤽🏾🤽🏿🤾🏻🤾🏼🤾🏽🤾🏾🤾🏿🤹🏻🤹🏼🤹🏽🤹🏾🤹🏿🧘🏻🧘🏼🧘🏽🧘🏾🧘🏿🛀🏻🛀🏼🛀🏽🛀🏾🛀🏿🛌🏻🛌🏼🛌🏽🛌🏾🛌🏿👭🏻👭🏼👭🏽👭🏾👭🏿👫🏻👫🏼👫🏽👫🏾👫🏿👬🏻👬🏼👬🏽👬🏾👬🏿💏🏻💏🏼💏🏽💏🏾💏🏿💑🏻💑🏼💑🏽💑🏾💑🏿#️⃣0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣✋🏻✋🏼✋🏽✋🏾✋🏿✌🏻✌🏼✌🏽✌🏾✌🏿☝🏻☝🏼☝🏽☝🏾☝🏿✊🏻✊🏼✊🏽✊🏾✊🏿✍🏻✍🏼✍🏽✍🏾✍🏿⛹🏻⛹🏼⛹🏽⛹🏾⛹🏿😀😃😄😁😆😅🤣😂🙂🙃😉😊😇🥰😍🤩😘😗😚😙🥲😋😛😜🤪😝🤑🤗🤭🤫🤔🤐🤨😐😑😶😏😒🙄😬🤥😌😔😪🤤😴😷🤒🤕🤢🤮🤧🥵🥶🥴😵🤯🤠🥳🥸😎🤓🧐😕😟🙁😮😯😲😳🥺😦😧😨😰😥😢😭😱😖😣😞😓😩😫🥱😤😡😠🤬😈👿💀💩🤡👹👺👻👽👾🤖😺😸😹😻😼😽🙀😿😾🙈🙉🙊💋💌💘💝💖💗💓💞💕💟💔🧡💛💚💙💜🤎🖤🤍💯💢💥💫💦💨🕳💣💬🗨🗯💭💤👋🤚🖐🖖👌🤌🤏🤞🤟🤘🤙👈👉👆🖕👇👍👎👊🤛🤜👏🙌👐🤲🤝🙏💅🤳💪🦾🦿🦵🦶👂🦻👃🧠🫀🫁🦷🦴👀👁👅👄👶🧒👦👧🧑👱👨🧔👩🧓👴👵🙍🙎🙅🙆💁🙋🧏🙇🤦🤷👮🕵💂🥷👷🤴👸👳👲🧕🤵👰🤰🤱👼🎅🤶🦸🦹🧙🧚🧛🧜🧝🧞🧟💆💇🚶🧍🧎🏃💃🕺🕴👯🧖🧗🤺🏇🏂🏌🏄🚣🏊🏋🚴🚵🤸🤼🤽🤾🤹🧘🛀🛌👭👫👬💏💑👪🗣👤👥🫂👣🦰🦱🦳🦲🐵🐒🦍🦧🐶🐕🦮🐩🐺🦊🦝🐱🐈🦁🐯🐅🐆🐴🐎🦄🦓🦌🦬🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🦙🦒🐘🦣🦏🦛🐭🐁🐀🐹🐰🐇🐿🦫🦔🦇🐻🐨🐼🦥🦦🦨🦘🦡🐾🦃🐔🐓🐣🐤🐥🐦🐧🕊🦅🦆🦢🦉🦤🪶🦩🦚🦜🐸🐊🐢🦎🐍🐲🐉🦕🦖🐳🐋🐬🦭🐟🐠🐡🦈🐙🐚🐌🦋🐛🐜🐝🪲🐞🦗🪳🕷🕸🦂🦟🪰🪱🦠💐🌸💮🏵🌹🥀🌺🌻🌼🌷🌱🪴🌲🌳🌴🌵🌾🌿🍀🍁🍂🍃🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🫐🥝🍅🫒🥥🥑🍆🥔🥕🌽🌶🫑🥒🥬🥦🧄🧅🍄🥜🌰🍞🥐🥖🫓🥨🥯🥞🧇🧀🍖🍗🥩🥓🍔🍟🍕🌭🥪🌮🌯🫔🥙🧆🥚🍳🥘🍲🫕🥣🥗🍿🧈🧂🥫🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🥮🍡🥟🥠🥡🦀🦞🦐🦑🦪🍦🍧🍨🍩🍪🎂🍰🧁🥧🍫🍬🍭🍮🍯🍼🥛🫖🍵🍶🍾🍷🍸🍹🍺🍻🥂🥃🥤🧋🧃🧉🧊🥢🍽🍴🥄🔪🏺🌍🌎🌏🌐🗺🗾🧭🏔🌋🗻🏕🏖🏜🏝🏞🏟🏛🏗🧱🪨🪵🛖🏘🏚🏠🏡🏢🏣🏤🏥🏦🏨🏩🏪🏫🏬🏭🏯🏰💒🗼🗽🕌🛕🕍🕋🌁🌃🏙🌄🌅🌆🌇🌉🎠🎡🎢💈🎪🚂🚃🚄🚅🚆🚇🚈🚉🚊🚝🚞🚋🚌🚍🚎🚐🚑🚒🚓🚔🚕🚖🚗🚘🚙🛻🚚🚛🚜🏎🏍🛵🦽🦼🛺🚲🛴🛹🛼🚏🛣🛤🛢🚨🚥🚦🛑🚧🛶🚤🛳🛥🚢🛩🛫🛬🪂💺🚁🚟🚠🚡🛰🚀🛸🛎🧳🕰🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜🌡🌝🌞🪐🌟🌠🌌🌤🌥🌦🌧🌨🌩🌪🌫🌬🌀🌈🌂🔥💧🌊🎃🎄🎆🎇🧨🎈🎉🎊🎋🎍🎎🎏🎐🎑🧧🎀🎁🎗🎟🎫🎖🏆🏅🥇🥈🥉🥎🏀🏐🏈🏉🎾🥏🎳🏏🏑🏒🥍🏓🏸🥊🥋🥅🎣🤿🎽🎿🛷🥌🎯🪀🪁🎱🔮🪄🧿🎮🕹🎰🎲🧩🧸🪅🪆🃏🀄🎴🎭🖼🎨🧵🪡🧶🪢👓🕶🥽🥼🦺👔👕👖🧣🧤🧥🧦👗👘🥻🩱🩲🩳👙👚👛👜👝🛍🎒🩴👞👟🥾🥿👠👡🩰👢👑👒🎩🎓🧢🪖📿💄💍💎🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙🎚🎛🎤🎧📻🎷🪗🎸🎹🎺🎻🪕🥁🪘📱📲📞📟📠🔋🔌💻🖥🖨🖱🖲💽💾💿📀🧮🎥🎞📽🎬📺📷📸📹📼🔍🔎🕯💡🔦🏮🪔📔📕📖📗📘📙📚📓📒📃📜📄📰🗞📑🔖🏷💰🪙💴💵💶💷💸💳🧾💹📧📨📩📤📥📦📫📪📬📭📮🗳🖋🖊🖌🖍📝💼📁📂🗂📅📆🗒🗓📇📈📉📊📋📌📍📎🖇📏📐🗃🗄🗑🔒🔓🔏🔐🔑🗝🔨🪓🛠🗡🔫🪃🏹🛡🪚🔧🪛🔩🗜🦯🔗🪝🧰🧲🪜🧪🧫🧬🔬🔭📡💉🩸💊🩹🩺🚪🛗🪞🪟🛏🛋🪑🚽🪠🚿🛁🪤🪒🧴🧷🧹🧺🧻🪣🧼🪥🧽🧯🛒🚬🪦🗿🪧🏧🚮🚰🚹🚺🚻🚼🚾🛂🛃🛄🛅🚸🚫🚳🚭🚯🚱🚷📵🔞🔃🔄🔙🔚🔛🔜🔝🛐🕉🕎🔯🔀🔁🔂🔼🔽🎦🔅🔆📶📳📴💱💲🔱📛🔰🔟🔠🔡🔢🔣🔤🅰🆎🅱🆑🆒🆓🆔🆕🆖🅾🆗🅿🆘🆙🆚🈁🈂🈷🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳🈺🈵🔴🟠🟡🟢🔵🟣🟤🟥🟧🟨🟩🟦🟪🟫🔶🔷🔸🔹🔺🔻💠🔘🔳🔲🏁🚩🎌🏴🏳🏻🏼🏽🏾🏿☺☹☠❣❤✋✌☝✊✍⛷⛹☘☕⛰⛪⛩⛲⛺♨⛽⚓⛵⛴✈⌛⏳⌚⏰⏱⏲☀⭐☁⛅⛈☂☔⛱⚡❄☃⛄☄✨⚽⚾⛳⛸♠♥♦♣♟⛑☎⌨✉✏✒✂⛏⚒⚔⚙⚖⛓⚗⚰⚱♿⚠⛔☢☣⬆↗➡↘⬇↙⬅↖↕↔↩↪⤴⤵⚛✡☸☯✝☦☪☮♈♉♊♋♌♍♎♏♐♑♒♓⛎▶⏩⏭⏯◀⏪⏮⏫⏬⏸⏹⏺⏏♀♂⚧✖➕➖➗♾‼⁉❓❔❕❗〰⚕♻⚜⭕✅☑✔❌❎➰➿〽✳✴❇©®™ℹⓂ㊗㊙⚫⚪⬛⬜◼◻◾◽▪▫.eth";
  const result = findCharacterSet(getLabel(emojis));
  t.is(result, characterSet.EMOJI);
})