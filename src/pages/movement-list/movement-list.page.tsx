import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVM } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementsListTableComponent } from "./components";
import { getMovementList } from "./api";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  React.useEffect(() => {
    
      getMovementList().then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
    
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
        </div>
        <MovementsListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
