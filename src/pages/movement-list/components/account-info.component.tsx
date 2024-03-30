import { AccountInfoVM } from "../account-info.vm";
import classes from "./account-info.component.module.css";

interface Props {
    accountInfo: AccountInfoVM;
}

export const AccountInfoComponent : React.FC<Props> = (props) => {
    const {accountInfo} = props;

    return(
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div>
            <p>SALDO DISPONIBLE</p>
            <p>{accountInfo.balance}€</p>
          </div>
        </div>
        <div>
          <p>Alias</p>
            <p>{accountInfo.name}</p>
          <p>IBAN</p>
            <p>{accountInfo.iban}</p>
        </div>
      </div>
    )
}