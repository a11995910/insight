/**
 * 显示对应机器人的外部调用API 并且带有点击复制功能
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
import { Icon, Modal, message,Button } from 'antd';
import './TextApi.less';

@inject('TaskStore', 'RobotStore')
@observer
class TextApi extends React.Component {
        constructor() {
            super();
            this.state = {};
        }

        // 复制到剪贴板
        copyToClipboard = (text) => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            message.success('复制成功');
        }

        render() {
            const { taskList } = this.props.TaskStore;
            const {
                robotInfo
            } = this.props.RobotStore;
            return (
                <>
                    <div className="text-api-container">
                        <div className="text-api-title">
                            <span>外部调用API</span>
                        </div>
                        <div className="text-api-content">
                            <div className="text-api-content-item">
                                <span>调用地址：</span>
                                <span className='APIURL'>{`${window.location.origin}/api/task/publish`}</span>
                            </div>
                            <div className='text-api-content-item'>
                                <span>快捷复制：</span>
                                <Button type="primary" onClick={() => this.copyToClipboard(`${window.location.origin}/api/task/publish`)}>复制</Button>
                            
                            </div>
                            <div className="text-api-content-item">
                                <span>调用方式：</span>
                                <span>POST</span>
                            </div>
                            <div className="text-api-content-item">
                                <span>请求参数：</span>
                                <span>
                                    <pre>
                                        <code>
{`{
    "content": "你好，这是一条测度消息",
    "type": "text",
    "robotId": "${robotInfo.id}"
}`}
                                        </code>
                                    </pre>
                                </span>
                            </div>
                            <div className="text-api-content-item">
                                <span>返回结果：</span>
                                <span>
                                    <pre>
                                        <code>
{`{
    "code": 0,
    "msg": "success"
}`}
                                        </code>
                                    </pre>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }
export default TextApi;