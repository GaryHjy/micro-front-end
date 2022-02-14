import { IRouteComponentProps } from 'umi'

import './index.less'

const BasicLayout = (props: IRouteComponentProps) => {
  const pathname = props.location.pathname

  const menus = [
    {
      title: '首页',
      path: "/"
    },
    {
      title: '子应用1',
      path: "/app1"
    },
  ]

  const jumpRouter = (path: string) => {
    props.history.push(path)
  }

  return (
    <div className='basic-layout'>
      <div className='basic-layout__sidebar'>
        <div className='logo'>LOGO</div>
        <div className='menu'>
          {
            menus.map(menu => (
              <div
                className={`menu__item ${menu.path === pathname && 'active'}`}
                onClick={() => jumpRouter(menu.path)}
                key={menu.path}
              >
                {menu.title}
              </div>
            ))
          }
        </div>

      </div>
      <div className='basic-layout__body'>
        {props.children}
      </div>
    </div>
  )
}

export default BasicLayout
