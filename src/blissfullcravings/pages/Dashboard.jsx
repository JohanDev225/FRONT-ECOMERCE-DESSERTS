import { useState } from "react";
import { LayoutBF } from "../layouts";
import { useDispatch, useSelector } from "react-redux";
import { Admin, List, Edit, Create } from "../components/adminSection";
import { getProductById, createProduct, updateProduct, deleteProduct } from "../../store";
import { toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.products);


  const [item, setItem] = useState('list')
  const [initialValues, setInitialValues] = useState({});
  const [isDeleteToastShown, setIsDeleteToastShown] = useState(false);
  const [isEditToastShown, setIsEditToastShown] = useState(false);

  const onHandleCreate = (values) => {
    dispatch(createProduct(values));
    setItem('list')
  };

  const onHandleById = (value) => {
    dispatch(getProductById(value._id));
    setInitialValues({ ...value, newWord: ""})
    setItem("edit");
  };

  const onHandleEdit = (id, values) => {
    dispatch(updateProduct(id, values));
    setItem("list");
  };

  const onHandleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  const showToast = () => {
    if (message) {
      if (message.type === 'edit' && !isEditToastShown) {
        toast(`Mensaje de edición: ${message.text}`);
        setIsEditToastShown(true);
      } else if (message.type === 'delete' && !isDeleteToastShown) {
        toast(`Mensaje de eliminación: ${message.text}`);
        setIsDeleteToastShown(true);
      } else if (message.type === 'create') {
        toast(`Mensaje de creación: ${message.text}`);
        setIsDeleteToastShown(true);
      }
    }
  };

  return (
    <LayoutBF>
      { message && showToast()}
        <Admin setItem={setItem}>
        {(() => {
        switch (item) {
          case 'list':
            return <List onHandleById={onHandleById} onHandleDelete={onHandleDelete}/>
          case 'create':
            return <Create onHandleCreate={onHandleCreate}/>
          case 'edit':
            return <Edit initialValues={initialValues} onHandleEdit={onHandleEdit}/>
          default:
            return null
        }
      })()}
        </Admin>
    </LayoutBF>
  );
}

export default Dashboard;