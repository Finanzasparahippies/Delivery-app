"use client";

import { Formik } from 'formik';
import AppData from "@data/app.json";

const CheckoutForm = () => {
  return (
    <>
        {/* contact form */}
        <Formik
        initialValues = {{ firstname: '', lastname: '', email: '', tel: '', company: '', country: '', city: '', state: '', address: '', postcode: '', message: '', payment_method: 1 }}
        validate = { values => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        }}
        onSubmit = {( values, { setSubmitting } ) => {
            const form = document.getElementById("checkoutForm");
            const status = document.getElementById("checkoutFormStatus");
            const data = new FormData();

            data.append('firstname', values.firstname);
            data.append('lastname', values.lastname);
            data.append('email', values.email);
            data.append('tel', values.tel);
            data.append('company', values.company);
            data.append('country', values.country);
            data.append('city', values.city);
            data.append('state', values.state);
            data.append('address', values.address);
            data.append('postcode', values.postcode);
            data.append('message', values.message);
            data.append('payment_method', values.payment_method);

            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
                    form.reset()
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                        } else {
                            status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
                        }
                    })
                }
            }).catch(error => {
                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>"
            });

            setSubmitting(false);
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit} id="checkoutForm" action={AppData.settings.formspreeURL} className="sb-checkout-form">
            <div className="sb-mb-30">
                <h3>Información para Facturar</h3>
            </div>
            <div className="row">
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="firstname" 
                        required="required" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname} 
                    />
                    <span className="sb-bar"></span>
                    <label>Nombre</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="lastname" 
                        required="required" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname} 
                    />
                    <span className="sb-bar"></span>
                    <label>Apellido</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=""
                        name="company"
                        required="false"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company} 
                    />
                    <span className="sb-bar"></span>
                    <label>Empresa</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="country"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country} 
                    />
                    <span className="sb-bar"></span>
                    <label>Pais</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="city"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city} 
                    />
                    <span className="sb-bar"></span>
                    <label>Ciudad</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="state"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.state} 
                    />
                    <span className="sb-bar"></span>
                    <label>Estado</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="address"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address} 
                    />
                    <span className="sb-bar"></span>
                    <label>Direccion</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="text" 
                        placeholder=" "
                        name="postcode"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postcode} 
                    />
                    <span className="sb-bar"></span>
                    <label>C.P</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="tel" 
                        placeholder=" "
                        name="tel"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tel} 
                    />
                    <span className="sb-bar"></span>
                    <label>Telefono</label>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="sb-group-input">
                    <input 
                        type="email" 
                        placeholder=" "
                        name="email"
                        required="required"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} 
                    />
                    <span className="sb-bar"></span>
                    <label>Email</label>
                </div>
                </div>
            </div>
            <div className="sb-group-input">
                <textarea 
                    placeholder=" "
                    name="message" 
                    required="false"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message} 
                />
                <span className="sb-bar"></span>
                <label>Notas de la Orden</label>
            </div>
            <div className="sb-mb-30">
                <h3 className="sb-mb-30">Metodo de Pago</h3>
                <ul>
                    <li className="sb-radio">
                        <input type="radio" id="option-1" name="payment_method" defaultChecked value="1" />
                        <label htmlFor="option-1">Transferencia</label>
                        <div className="sb-check"></div>
                    </li>
                    <li className="sb-radio">
                        <input type="radio" id="option-2" name="payment_method" value="2" />
                        <label htmlFor="option-2">Tarjeta de Debito/Credito</label>
                        <div className="sb-check"></div>
                    </li>
                    <li className="sb-radio">
                        <input type="radio" id="option-3" name="payment_method" value="3" />
                        <label htmlFor="option-3">Efectivo</label>
                        <div className="sb-check"></div>
                    </li>
                </ul>
            </div>
            {/* button */}
            <button type="submit" className="sb-btn sb-m-0">
                <span className="sb-icon">
                    <img src="/img/ui/icons/arrow.svg" alt="icon" />
                </span>
                <span>Terminar Orden</span>
            </button>
            {/* button end */}

            <div id="checkoutFormStatus" className="form-status"></div>
        </form>
        )}
        </Formik>
        {/* contact form end */}
    </>
  );
};
export default CheckoutForm;