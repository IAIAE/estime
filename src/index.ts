import { Interpreter, MyParser as Parser } from "./interpreter/main";
import * as vm from "./vm";
import evaluate from "./evaluate";
import Function from "./Function";
import findGlobal from './util/findglobal';

export { Interpreter, vm, evaluate, Function, Parser, findGlobal };
