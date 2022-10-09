import { Card, Form, Row, Col, Input, Select, Button } from "antd";
import './SignUp.css'
import logo from '../../assets/logo.png'



const SignUp = () => {
    const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya",
        "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl",
        "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli",
        "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep",
        "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul",
        "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
        "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir",
        "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat",
        "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt",
        "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"]



    const [form] = Form.useForm()



    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email)
    }



    const handleValidate = () => {
        form.setFields([{
            name: 'name',
            errors: form.getFieldValue('name') ? [] : ['Ad Giriniz !']
        },
        {
            name: 'surname',
            errors: form.getFieldValue('surname') ? [] : ['Soyad Giriniz !']
        }, {
            name: 'username',
            errors: form.getFieldValue('username') ? [] : ['Kullanıcı Adı Giriniz !']
        },
        {
            name: 'email',
            errors: validateEmail(form.getFieldValue('email')) ? [] : ['Kullanıcı Email Giriniz !']
        },
        {
            name: 'password',
            errors: form.getFieldValue('password').length > 7 ? [] : ['Parola Giriniz !']
        },
        ])


    }
    return (
        <Card className="sign-up-card">
            <div className="sign-up-logo-wrapper">
                <img className="logo-img" src={logo} alt="logo" />
            </div>
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                initialValues={{
                    name: '',
                    surname: '',
                    username: '',
                    email: '',
                    city: 'Ankara',
                    password: ''
                }}
            >

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Ad" required name="name"
                            rules={[{ required: true, message: "Lütfen ad giriniz !" }]}>
                            <Input placeholder="Adınız" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Soyad" required name="surname"
                            rules={[{ required: true, message: "Lütfen soyad giriniz !" }]}>
                            <Input placeholder="Soyadınız" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Şehir" required name="city"
                            rules={[{ required: true, message: "Lütfen şehir seçiniz !" }]}>
                            <Select initialValues="Ankara" placeholder="Yaşadığı Şehir">
                                {cities.map((item) => {
                                    return (
                                        <Select.Option key={item} value={item}>{item}</Select.Option>
                                    )
                                })}

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Kullanıcı Adı" required name="username"
                            rules={[{ required: true, message: "Lütfen kullanıcı adı giriniz !" }, {
                                min: 3,
                                message: "Min 3 karakter giriniz"
                            }]}>
                            <Input placeholder="Kullanıcı Adı" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email" required name="email" rules={[{
                            required: true,
                            type: "email",
                            message: "Lütfen geçerli bir email adresi giriniz !"
                        }]}>
                            <Input placeholder="Email" />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Parola" required name="password"
                            rules={[{ required: true, message: "Lütfen parola giriniz !" }, { min: 8, message: "Lütfen 8 karakterlik bir parola olusturun" }]}>
                            <Input.Password placeholder="Parola" />

                        </Form.Item>
                    </Col>

                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Button componen onClick={handleValidate} className="w-full" type="primary">Kayıt Ol !</Button>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Button className="w-full" type="link">Giriş Yap !</Button>
                    </Col>
                </Row>

            </Form>
        </Card>
    )
}
export default SignUp
