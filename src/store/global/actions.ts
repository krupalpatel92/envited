import { createAction } from '@reduxjs/toolkit';

export const setDisableAllPlugin = createAction<boolean>('global/allPluginsStatus');
