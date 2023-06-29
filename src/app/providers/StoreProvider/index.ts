import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReduxStoreWithManager } from './config/StateSchema';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
};
