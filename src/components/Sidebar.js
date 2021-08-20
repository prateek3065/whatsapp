import React, { useState } from "react";
import { Tab, Nav, TabContainer, Button, Modal } from "react-bootstrap";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";
const CONVERSATION_KEY = "Conversation";
const CONTACTS_KEY = "Contacts";
export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(() => {
    return CONVERSATION_KEY;
  });
  const [modalOpen, setModalOpen] = useState(() => {
    return false;
  });
  const conversationOpen = activeKey === CONVERSATION_KEY;
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content
          className="overflow-auto flex-grow-1"
          style={{ border: "1px solid blue" }}
        >
          <Tab.Pane eventKey={CONVERSATION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="small" style={{ borderRight: "1px solid blue" }}>
          Your id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationOpen ? "Conversation" : "Contacts"}
        </Button>
      </Tab.Container>
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closeModal} />
        )}
      </Modal>
    </div>
  );
}
