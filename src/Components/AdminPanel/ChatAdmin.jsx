import React from 'react'
import AdminPanelHeader from '../../Containers/AdminPanelHeader/AdminPanelHeader'
import Chat from '../ChatPage/Chat'

const ChatAdmin = () => {
    return (
        <AdminPanelHeader>
            <Chat />
        </AdminPanelHeader>
    )
}

export default React.memo(ChatAdmin)
