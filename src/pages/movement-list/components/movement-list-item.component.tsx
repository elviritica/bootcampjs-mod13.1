import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
    movementItem: MovementVM;
}

export const MovementsListItemComponent : React.FC<Props> = (props) => {
    const {movementItem} = props;

    return(
        <div className={classes.row}>
            <span>{movementItem.transaction.toLocaleDateString()}</span>
            <span>{movementItem.realTransaction.toLocaleDateString()}</span>
            <span>{movementItem.description}</span>
            <span>{movementItem.amount}</span>
            <span>{movementItem.balance}</span>
        </div>
    )
}