import { JsonSettings } from '../types/jsonSettings';
import { buildSelector } from '@/shared/lib/store/buildSelector';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings
);
