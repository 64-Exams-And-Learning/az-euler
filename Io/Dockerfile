FROM alpine:3.12.2
RUN apk update 
RUN apk add --update alpine-sdk cmake
RUN mkdir /app
WORKDIR /app
RUN git clone --recursive https://github.com/IoLanguage/io.git \
    && cd io/ \ 
    && mkdir build \
    && cd build 
RUN cmake .. \
    && make \
    && make install
    