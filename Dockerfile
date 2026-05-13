FROM node:24-alpine AS base

WORKDIR /app

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

FROM base AS test
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm output:legacy && pnpm output:refactored
CMD ["pnpm", "test"]