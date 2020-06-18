export const Break = Symbol("Break");
export const Continue = Symbol("Continue");
export const DefaultCase = Symbol("DefaultCase");
export const EmptyStatementReturn = Symbol("EmptyStatementReturn");
export const WithScopeName = Symbol("WithScopeName");
export const SuperScopeName = Symbol("SuperScopeName");
export const RootScopeName = Symbol("RootScopeName");
export const GlobalScopeName = Symbol("GlobalScopeName");

export {createSymbolFunc, isSymbol, storeKey} from './kls'
