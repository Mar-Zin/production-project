import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReduxStoreWithManager, ThunkConfig } from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
