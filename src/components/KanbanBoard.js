import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import { firestore } from "../firebase.config.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const KanbanBoard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "BoardCardMaster"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCards(data);
        console.log(cards)
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching cards:", error);
        setLoading(false); // Set loading to false on error as well
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    // Do something when cards state changes, if needed
  }, [cards]);

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || destination.droppableId === source.droppableId) return;

    const updatedCards = cards.map(card => {
      if (card.id === draggableId) {
        return { ...card, cardProgressStatus: destination.droppableId };
      }
      return card;
    });

    setCards(updatedCards);

    // Update cardProgressStatus in Firestore
    try {
      await updateDoc(doc(firestore, "BoardCardMaster", draggableId), {
        cardProgressStatus: destination.droppableId
      });
    } catch (error) {
      console.error("Error updating cardProgressStatus:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex" }}>
        {/* Todo Column */}
        <Droppable droppableId="todo">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ flex: 1 }}>
              <h2>To Do</h2>
              {cards.map((card, index) => {
  if (card.cardProgressStatus === "todo") {
    return (
      <Draggable key={card.id} draggableId={card.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              margin: "8px",
              border: "1px solid lightgrey",
              borderRadius: "4px",
              padding: "8px",
              backgroundColor: "white"
            }}
          >
            <div>{card.cardProjectId}</div>
            <div>{card.cardProjectOwner}</div>
          </div>
        )}
      </Draggable>
    );
  }
  return null;
})}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* InProgress Column */}
        <Droppable droppableId="inProgress">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ flex: 1 }}>
              <h2>In Progress</h2>
              {cards.map((card, index) => {
                if (card.cardProgressStatus === "inProgress") {
                  return (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            margin: "8px",
                            border: "1px solid lightgrey",
                            borderRadius: "4px",
                            padding: "8px",
                            backgroundColor: "white"
                          }}
                        >
                          <div>{card.cardProjectId}</div>
                          <div>{card.cardProjectOwner}</div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
                return null;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* Done Column */}
        <Droppable droppableId="done">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} style={{ flex: 1 }}>
              <h2>Done</h2>
              {cards.map((card, index) => {
                if (card.cardProgressStatus === "done") {
                  return (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            margin: "8px",
                            border: "1px solid lightgrey",
                            borderRadius: "4px",
                            padding: "8px",
                            backgroundColor: "white"
                          }}
                        >
                          <div>{card.cardProjectId}</div>
                          <div>{card.cardProjectOwner}</div>
                        </div>
                      )}
                    </Draggable>
                  );
                }
                return null;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
