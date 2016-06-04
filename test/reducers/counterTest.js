import test  from 'ava';
import {reducerTest} from 'redux-ava';

import {counterReducer} from '../../src/renderer/reducers/counter';
import * as counterActions from '../../src/renderer/actions/counter';

test('increment count',
    reducerTest(counterReducer, 1, counterActions.increment(1), 2)
);