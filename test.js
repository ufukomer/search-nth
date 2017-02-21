import test from 'ava';
import m from './';

test('should return nth match', t => {
	const pattern = /\b\d+\b/g;
	const date = 'Tue Feb 21 2017 16:59:11';

	t.is(m(date, pattern, 3), 16);
});

test('should add g flag', t => {
	const pattern = /\b\d+\b/;
	const date = 'Tue Feb 21 2017 16:59:11';

	t.is(m(date, pattern, 3), 16);
});

test('should return -1', t => {
	const pattern = /\b\d+\b/g;
	const date = 'Tue Feb 21 2017 16:59:11';

	t.is(m(date, pattern, 8), -1);
});

test('should return first match if nth <= 0', t => {
	const pattern = /\b\d+\b/g;
	const date = 'Tue Feb 21 2017 16:59:11';

	t.is(m(date, pattern, 0), 8);
});

test('should return first match if nth is undefined', t => {
	const pattern = /\b\d+\b/g;
	const date = 'Tue Feb 21 2017 16:59:11';

	t.is(m(date, pattern), 8);
});
