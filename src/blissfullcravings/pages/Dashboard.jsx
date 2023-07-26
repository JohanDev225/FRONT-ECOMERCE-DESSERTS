import { useState } from "react";
import { LayoutBF } from "../layouts";

import { Admin, List, Edit, Create } from "../components/adminSection";

const Dashboard = () => {

  const [item, setItem] = useState('list')

  return (
    <LayoutBF>
        <Admin setItem={setItem}>
        {(() => {
        switch (item) {
          case 'list':
            return <List setItem={setItem} />
          case 'create':
            return <Create />
          case 'edit':
            return <Edit />
          default:
            return null
        }
      })()}
        </Admin>
    </LayoutBF>
  );
}

export default Dashboard;