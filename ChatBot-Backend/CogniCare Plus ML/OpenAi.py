from Cognicareplus import get_chain
import streamlit as st
# import speech_recognition as sr

def is_dementia_related(answer):
    # Implement a logic to determine if the answer is related to tea topics
    dementia_keywords = [
    'dementia', 'Alzheimer\'s disease', 'memory loss', 'cognitive impairment', 'neurodegenerative',
    'brain health', 'senile dementia', 'vascular dementia', 'frontotemporal dementia', 'dementia symptoms',
    'cognitive decline', 'dementia care', 'cognitive function', 'dementia prevention', 'dementia treatment',
    'dementia research', 'dementia support', 'dementia awareness', 'cognitive disorders', 'dementia risk factors',
    'dementia diagnosis', 'dementia stages', 'dementia therapy', 'dementia causes', 'dementia genetics',
    'dementia medication', 'dementia screening', 'dementia education', 'dementia communication', 'dementia patients',
    'dementia caregivers', 'dementia interventions', 'dementia prevalence', 'dementia therapy', 'dementia brain',
    'dementia impact', 'dementia aging', 'dementia mental health', 'neuropsychological tests', 'cerebral atrophy',
    'mild cognitive impairment', 'neurocognitive disorders', 'cognitive reserve', 'dementia risk reduction',
    'dementia nutrition', 'exercise and dementia', 'cognitive therapy', 'cognitive rehabilitation', 'dementia assessment',
    'neuropsychiatry', 'dementia technology', 'dementia social support', 'neurocognitive rehabilitation', 'dementia community',
    'dementia initiatives', 'neuropathology', 'cognitive decline prevention', 'dementia workshops', 'dementia care facilities',
    'dementia legal issues', 'dementia counseling', 'dementia coping strategies', 'dementia advocacy', 'dementia public health',
    'dementia epidemiology', 'dementia early signs', 'dementia risk assessment', 'dementia impact on families', 'dementia genetics',
    'dementia and sleep', 'dementia and nutrition', 'dementia and exercise', 'dementia and mental health', 'dementia and quality of life',
    'dementia caregiver stress', 'dementia caregiver support', 'dementia caregiver resources', 'dementia caregiver education',
    'dementia caregiver interventions', 'dementia caregiver health', 'dementia caregiver burden', 'dementia caregiver coping',
    'dementia caregiver communication', 'dementia caregiver well-being', 'dementia caregiver respite', 'dementia caregiver burnout',
    'dementia caregiver training', 'dementia caregiver empowerment', 'dementia caregiver community', 'dementia caregiver services',
    'dementia caregiver tips', 'dementia caregiver networks', 'dementia caregiver organizations', 'dementia caregiver forums',
    'dementia caregiver helpline', 'dementia caregiver therapy', 'dementia caregiver workshops', 'dementia caregiver advocacy',
    'neurodegenerative disorders', 'neurological decline', 'age-related cognitive decline', 'brain function deterioration',
    'memory impairment causes', 'neuropathological changes', 'neurological aging', 'dementia risk assessment tools',
    'early detection of dementia', 'cognitive health promotion', 'cognitive training programs', 'brain plasticity',
    'neuroprotective strategies', 'dementia and lifestyle factors', 'genetic factors in dementia', 'dementia risk evaluation',
    'social determinants of dementia', 'mental health in older adults', 'aging brain health', 'neurocognitive aging',
    'cognitive reserve theory', 'dementia risk modification', 'nutrition and cognitive health', 'physical activity and dementia',
    'brain-stimulating activities', 'cognitive assessments in dementia', 'neuropsychological assessment tools', 'cognitive therapy approaches',
    'interventions for cognitive decline', 'cognitive rehabilitation techniques', 'behavioral interventions for dementia',
    'holistic approaches to dementia care', 'person-centered dementia care', 'cultural competence in dementia care',
    'diversity in dementia research', 'dementia awareness campaigns', 'public perceptions of dementia', 'stigma surrounding dementia',
    'psychosocial impact of dementia', 'caregiver burden in dementia', 'resilience in dementia caregivers', 'positive aspects of caregiving',
    'support groups for dementia caregivers', 'telehealth for dementia care', 'technology-assisted dementia support',
    'smart home solutions for dementia', 'robotic assistance in dementia care', 'virtual reality therapy for dementia', 'music therapy in dementia',
    'art therapy for dementia patients', 'animal-assisted therapy for dementia', 'mindfulness interventions for dementia',
    'spirituality in dementia care', 'ethics of dementia research', 'informed consent in dementia studies', 'dementia clinical trials',
    'global perspectives on dementia', 'cross-cultural studies in dementia', 'health disparities in dementia', 'equity in dementia care',
    'economic impact of dementia', 'long-term care for dementia patients', 'advanced care planning in dementia', 'end-of-life decisions in dementia',
    'palliative care for dementia patients', 'legal considerations in dementia care', 'dementia and driving', 'dementia-friendly communities',
    'dementia prevention policies', 'government initiatives on dementia', 'dementia care workforce', 'training for healthcare professionals in dementia',
    'integrated care for dementia patients', 'transitional care in dementia', 'continuum of care for dementia', 'dementia research funding',
    'collaborative research in dementia', 'open science in dementia research', 'data sharing in dementia studies', 'interdisciplinary dementia research',
    'emerging technologies in dementia research', 'big data analytics in dementia', 'precision medicine in dementia', 'personalized approaches to dementia care'
]

    answer_lower = answer.lower()

     # Check if at least one tea-related keyword is present in the entire answer
    return any(keyword in answer_lower for keyword in dementia_keywords)



# URL for the logo of the assistant bot
# We need it as a separate variable because it's used in multiple places
bot_logo = 'https://pbs.twimg.com/profile_images/1739538983112048640/4NzIg1h6_400x400.jpg'



chain = get_chain()





    
# We use st.session_state and fill in the st.session_state.messages list
# It's empty in the beginning, so we add the first message from the bot
if 'messages' not in st.session_state:
    st.session_state['messages'] = [{"role": "bot",
                                     "content": "Hello I'm Zap, how can I Help?"}]
    
# Then we show all the chat messages in Markdown format
for message in st.session_state['messages']:
    if message["role"] == 'bot':
        with st.chat_message(message["role"], avatar=bot_logo):
            st.markdown(message["content"])
    else:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

# We ask for the user's question, append it to the messages and show below
input_type = st.radio("Select input type:", ("Text", "Speech"))
if input_type == "Text":
    query_input = st.text_input("Please ask your Question Here:")


if query_input:
    st.session_state.messages.append({"role": "user", "content": query_input})
    with st.chat_message("user"):
        st.markdown(query_input)

    # Generate response from the chatbot
    result = chain({"question": query_input})

    # Create a new chat message and display the result
    with st.chat_message("assistant", avatar=bot_logo):
        message_placeholder = st.empty()

        # Check if the answer is tea-related before displaying
        if is_dementia_related(result['answer']):
            message_placeholder.markdown(result['answer'])
        else:
            st.warning("The answer may not be directly related to Dementia, diseases, or treatment plans.")

