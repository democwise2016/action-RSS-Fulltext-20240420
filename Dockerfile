FROM pudding/github-action-app:puppeteer-python-14-action-rss-ut-20240420-2353
RUN npm link he@1.2.0
#RUN pip install youtube_transcript_api

# RUN pip install git+https://github.com/openai/whisper.git
# RUN wget https://openaipublic.azureedge.net/main/whisper/models/e4b87e7e0bf463eb8e6956e646f1e277e901512310def2c24bf0e11bd3c28e9a/large.pt -O /large-v2.pt
# RUN pip install langdetect
# RUN git clone https://github.com/javedali99/audio-to-text-transcription.git

# COPY ./app/python/youtube_audio_to_text.py /audio-to-text-transcription/youtube_audio_to_text.py
# RUN mv /large.pt /large-v2.pt