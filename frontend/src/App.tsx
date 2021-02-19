import React from 'react';
import './App.css';
import { Button, Col, Form, Input, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header></Header>
        <Layout>
          <div style={{padding: "32px 8px 32px 8px"}}>
            <Row>
              <Col span={18} style={{padding: "0px 16px 0px 16px"}}>
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                  }}
                >
                  <iframe
                    title="test"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }}
                    src={`https://www.youtube.com/embed/uG4TfFdX-5M`}
                    frameBorder="0"
                  />
                </div>
              </Col>
              <Col span={6} style={{padding: "0px 16px 0px 16px"}}>
                <div style={{height: "100%"}}>
                  <Content style={{
                    background: '#e7e7e7', padding: 24, minHeight: 280, height: "90%"
                  }}
                  >
                    
                  </Content>
                  
                  <Form layout="inline" style={{height: "10%", paddingTop: 10, width: "100%"}}>
                    <Form.Item >
                      <Input id="msg" placeholder="Type something..." />
                    </Form.Item>
                    <Form.Item >
                      <Button type="primary" htmlType="submit" id="send">Send</Button>
                    </Form.Item>
                  </Form>
                  
                </div>
              </Col>
            </Row>
          </div>
          
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      
    </div>
  );
}

export default App;
