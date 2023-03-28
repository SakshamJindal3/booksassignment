
import { functions } from './user/index';
import { authorizationfunction } from './authorization';
import { bookfunctions } from './books';
export const registers = functions.register;
export const logins = functions.login;
export const getuserdatas = functions.getuserdata;
export const deleteusers = functions.deleteuser;
export const addbook = bookfunctions.addbooks;
export const updateadminbook = bookfunctions.adminupdatebookdata;
export const getbookdatas = bookfunctions.getbookdata;
export const updatebookdatas = bookfunctions.updatebookdata;
export const deletebooksdatas = bookfunctions.deletebooksdata;
export const authorizationfunctions = authorizationfunction.authorize;
