import {Layout} from "antd";

const {Header, Content} = Layout;

const MainLayout = () => {
    return (
        <Layout>
            <Header>
                <p>Header</p>
            </Header>
            <Layout>
                <Content>
                    <p>Content</p>
                </Content>
            </Layout>
        </Layout>

    )
}