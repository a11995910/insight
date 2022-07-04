/**
 * 日志部分
 */
import React from 'react';
import { inject, observer } from 'mobx-react';
import dayjs from 'dayjs';
import { Tooltip } from 'antd';

import  style from './index.less';


@inject('LogStore')
@observer
class Log extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
  }

  renderTitle = (item) => {
    const content = item.replace(/(\r\n)|(\n)/g, '<br />');
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  render() {
    const { logList } = this.props.LogStore;

    return (
      <section className="card-warp mt-20">
        <div className="card-title title-main">
          <span className="color-white-normal f-18">历史执行记录</span>
          <span className="color-white-light f-14 ml-8">（最近250条执行记录）</span>
        </div>
        <div className="card-content">

          {logList.length
            ? (
              <div>

                {
                  logList.map((item, index) => {
                    return (
                      <Tooltip title={this.renderTitle(item.remark || '')} key={index}>
                        <div className="content-item d-flex justify-content-around align-items-center">
                          <div className="m-w-150">{dayjs(item.createDate).format('YYYY年MM月DD日 HH:mm:ss')}</div>
                          <div className="ml-5px m-w-50 text-nowrap">
                            {item.methond === '0' ? '手动触发' : item.methond === '1' ?'定时触发':'API触发'}
                            ：
                            {item.remark || ''}
                          </div>
                          <div className="ml-auto" >
                            {/* 成功绿色显示 失败红色显示 */}
                            {item.status === '0' ? <span className="color-red">执行失败</span> :<span className="color-green">执行成功</span>}
                          </div>
                        </div>
                      </Tooltip>

                    );
                  })
                }
              </div>
            )
            : (<p className="text-center pt-40">暂无执行日志</p>)}
        </div>
      </section>

    );
  }
}
export default Log;
