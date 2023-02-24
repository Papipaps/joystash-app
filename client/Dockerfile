FROM postgres:alpine

# Copier les fichiers d'initialisation dans le conteneur
# COPY init.sql /docker-entrypoint-initdb.d/

# Exposer le port par défaut de PostgreSQL
EXPOSE ${PG_PORT}

# Définir la variable d'environnement pour la base de données
ENV POSTGRES_DB=${PG_DATABASE}

# Définir la variable d'environnement pour l'utilisateur de la base de données
ENV POSTGRES_USER=${PG_USER}

# Définir la variable d'environnement pour le mot de passe de l'utilisateur de la base de données
ENV POSTGRES_PASSWORD=${PG_PASSWORD}

# Définir le répertoire de travail
WORKDIR /app
