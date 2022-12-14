import { AccountRepository } from "../repositories/accounts.repository";

class AccountsServices {
    checkAccountExists = async (social_id:string) => {
        const repository = new AccountRepository();
        if(await repository.checkAccount(social_id)) {
            return true;
        } else return false;
    }

    checkAccountExistsByUUID = async (id:string) => {
        const repository = new AccountRepository();
        if(await repository.checkAccountByUUID(id)) {
            return true;
        } else return false;
    }

    checkAccountsSameUUID = async (social_id:string, account_type:string, id:string) => {
        const repository = new AccountRepository();
        if(await repository.checkIfSameAccount(social_id, account_type, id)) {
            return true;
        } else return false;
    }

    createUserAccount = async (social_id:string, password:string) => {
        const repository = new AccountRepository();
        if(await repository.createAccount(social_id, password)) {
            return true;
        } else return false;
    }

    checkAccountLogin = async (social_id:string, password:string) => {
        if(await this.checkAccountExists(social_id)) {
            const repository = new AccountRepository();
            if(await repository.loginAccount(social_id, password)) {
                return true;
            } else return false;
        } else return false;
    }

    getAccountFunds = async (social_id:string, password:string) => {
        if(await this.checkAccountExists(social_id)) {
            const repository = new AccountRepository();
            if(await repository.getFunds(social_id, password)) {
                return repository.getFunds(social_id, password);
            } else return false;
        } else return false;
    }

    getAccountStatement = async (social_id:string, password:string) => {
        if(await this.checkAccountExists(social_id)) {
            const repository = new AccountRepository();
            if(await repository.getStatement(social_id, password)) {
                return repository.getStatement(social_id, password);
            } else return false;
        } else return false;
    }
}

export { AccountsServices }