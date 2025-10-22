import {
    Body,
    Button,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text
} from '@react-email/components';

interface ContactEmailProps {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
    ? process.env.NEXT_PUBLIC_APP_URL
    : 'http://localhost:3000';

export const ContactEmail = ({
    name,
    email,
    company,
    message
}: ContactEmailProps) => {
    const formattedDate = new Intl.DateTimeFormat('en', {
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(new Date());

    return (
        <Html>
            <Head />
            <Body style={main}>
                <Preview>Recent nudgely contact from website</Preview>
                <Container>
                    <Section style={logo}>
                        <Img
                            src={`${baseUrl}/logo.png`}
                            width="120"
                            height="36"
                            alt="Nudgely"
                        />
                    </Section>

                    <Section style={content}>
                        <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                            <Column>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                >
                                    Recent contact email from website
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Date: </b>
                                    {formattedDate}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Name: </b>
                                    {name}
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Email: </b>
                                    {email}
                                </Text>
                                <Text
                                    style={{
                                        ...paragraph,
                                        marginTop: -5
                                    }}
                                >
                                    <b>Company: </b>
                                    {company}
                                </Text>

                                <Text
                                    style={{
                                        ...paragraph,
                                        whiteSpace: 'pre-line'
                                    }}
                                >
                                    {message}
                                </Text>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

ContactEmail.PreviewProps = {
    name: 'Alan',
    email: 'mark@mark.com',
    company: 'That company',
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar aliquam lorem, interdum feugiat purus porttitor eu. Etiam blandit felis in hendrerit placerat. Aliquam erat volutpat. Phasellus libero tellus, aliquet id accumsan in, imperdiet ut mi. Vivamus quis odio vehicula, imperdiet massa sed, sagittis est. Aenean ultricies quam non leo commodo ultricies. Nulla pulvinar maximus tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse pulvinar augue metus, id tempor purus ornare in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec congue dolor id pellentesque lacinia. Duis a accumsan felis. Aliquam justo leo, volutpat ac massa sit amet, fermentum vehicula lectus. Nam posuere mi non magna porta semper.

Ut feugiat tempus nulla, quis placerat augue blandit interdum. Nullam egestas eleifend ex, et auctor metus venenatis eu. Vivamus sit amet lorem suscipit ligula interdum iaculis posuere vel justo. Donec orci mauris, facilisis eget nunc vel, facilisis posuere justo. Aenean porta sagittis orci, interdum iaculis erat tincidunt vitae. Donec ac pharetra massa. Integer magna felis, lobortis quis aliquam vitae, consequat non sem. Mauris consectetur feugiat malesuada.`
} as ContactEmailProps;

export default ContactEmail;

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const paragraph = {
    fontSize: 16
};

const logo = {
    padding: '30px 20px'
};

const buttonContainer = {
    textAlign: 'center' as const
};

const button = {
    backgroundColor: '#e00707',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '12px 30px',
    textDecoration: 'none'
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden'
};

const image = {
    maxWidth: '100%'
};

const boxInfos = {
    padding: '20px'
};

const containerImageFooter = {
    padding: '45px 0 0 0'
};
