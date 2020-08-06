import { Store } from 'vuex';
import { init } from '~/core/vuex-helper';

const initializer = (store: Store<any>) => init(store);
export const plugins = [initializer];
export * from '~/core/vuex-helper';