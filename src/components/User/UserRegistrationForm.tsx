import React, { useState } from "react";
import Form from "../../shared/Form";
import { Row, Col } from "react-bootstrap";
import ImageUpload from "../../shared/ImageUpload";
import Input from "../../shared/Input";
import i18next from "i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserRegistrationForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const navigate = useNavigate()

    const handleLogin = async () => {
        //   try {
        //     await dispatch(login(form))
        //     navigate('/')
        //   } catch(err) {
        //     Swal.fire(
        //       'Error',
        //       err.response?.data?.message || err.message,
        //       'error'
        //     )
        //   }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //   const { value, name } = event.target

        //   setForm({
        //     ...form,
        //     [name]: value
        //   })
    }

    return (
        <>
            <Form title={i18next.t('cadastro-usuario')} onSubmit={handleLogin}>
                <Row>
                    <Col>
                        <ImageUpload />
                    </Col>
                    <Input
                        label={i18next.t('nome')}
                        name="nome"
                        // value={form.user}
                        // onChange={handleInputChange}
                        placeholder={i18next.t('nome-placeholder')}
                    />
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default UserRegistrationForm