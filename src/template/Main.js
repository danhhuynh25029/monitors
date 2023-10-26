import {Layout} from "antd";
import List from "../molecule/List";
import React from "react";
import Flow from "../organism/Flow";
import Header from "../organism/Header";
const {Content} = Layout;

const MainLayout = () => {
    return (
        <Layout style={{height : "100%"}}>
            <Header/>
            <Layout>
                <Content>
                    <List/>
                </Content>
                <Content style={{height:"100%"}}>
                    <Flow/>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout;