import { Formik, Field} from 'formik';
import * as Yup from "yup";

import PropTypes from "prop-types";

const Create = ({onHandleCreate}) => {

  const handleAddWord = (values, setFieldValue) => {
    if (!values.tags.includes(values.newWord)) {
      setFieldValue('tags', [...values.tags, values.newWord]);
      setFieldValue('newWord', ''); // Limpiar el input
    } else {
      alert('Word Already Exists');
    }
  };

  const handleRemoveWord = (index, values, setFieldValue) => {
    const updateTags = [...values.tags];
    updateTags.splice(index, 1);
    setFieldValue('tags', updateTags);
  };

  const NewDessertSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    sweet: Yup.number().required("Required"),
    newWord: Yup.string().trim(),
    tags: Yup.array().of(Yup.string().trim().required('Required')),
    image: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
  });

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          sweet: "",
          newWord: '',
          tags: [],
          image: "",
          category: "",
        }}
        validationSchema={NewDessertSchema}
        onSubmit={(values) => {
          onHandleCreate(values);
        }}
      >
        {({
          values,
          setFieldValue,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
              placeholder=" "
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre y Apellido<span className="text-red-500">*</span>
            </label>
            {errors.name && <div className="text-red-500">{errors.name}</div>}
          </div>
            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                name="description"
                id="description"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                required
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description<span className="text-red-500">*</span>
              </label>
              {errors.description && <div className="text-red-500">{errors.description}</div>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price<span className="text-red-500">*</span>
              </label>
              {errors.price && <div className="text-red-500">{errors.price}</div>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="sweet"
                id="sweet"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                placeholder=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.sweet}
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Sweetness<span className="text-red-500">*</span>
              </label>
              {errors.sweet && <div className="text-red-500">{errors.sweet}</div>}
            </div>
            <div className="flex relative z-0 w-full mb-6 group">

              <Field
                id="newWord"
                name="newWord"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                placeholder=" "
                type="text"
              />
              <button
                type="button"
                className="px-4 py-2 bg-cyan text-white rounded-r"
                onClick={() => handleAddWord(values, setFieldValue)}
              >
                Add
              </button>
        
            <label
                htmlFor="newWord"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Tags Of Ingredients<span className="text-red-500">*</span>
              </label>
              </div>
            <div className="mt-2">
              {values.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide ml-1 p-1"
                >
                  {tag}
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => handleRemoveWord(index, values, setFieldValue)}
                  >
                    X
                  </button>
                </span>
              ))}
            </div>
            
      
            {errors.newWord && <div className="text-red-500">{errors.newWord}</div>}
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="image"
                id="image"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
                required
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image URL<span className="text-red-500">*</span>
              </label>
              {errors.image && <div className="text-red-500">{errors.image}</div>}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="category"
                id="category"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-accentGreen peer"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                required
              />
              <label
                htmlFor="category"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accentGreen peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Category<span className="text-red-500">*</span>
              </label>
              {errors.category && <div className="text-red-500">{errors.category}</div>}
            </div>

            <div>
              {errors.password && touched.password && errors.password}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create New Dessert
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

Create.propTypes = {
  onHandleCreate: PropTypes.func.isRequired,
};

export default Create;
