from langchain.document_loaders.csv_loader import CSVLoader 
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import FAISS 
from langchain.chat_models import ChatOpenAI 
from langchain.chains import ConversationalRetrievalChain 
from langchain.memory import ConversationBufferMemory
import os


def get_chain():
  os.environ["OPENAI_API_KEY"]='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';


  loader=CSVLoader(file_path="Dementia.csv")
  documents=loader.load()


  embeddings_model=OpenAIEmbeddings()


  vectorstore = FAISS.from_documents(documents, OpenAIEmbeddings()) 

  memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True) 

  chain = ConversationalRetrievalChain.from_llm(llm=ChatOpenAI(), 
                                                retriever=vectorstore.as_retriever(),
                                              memory=memory) 
  return chain