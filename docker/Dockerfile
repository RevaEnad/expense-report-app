FROM docker.io/bitnami/laravel:9

# Install required packages and dependencies
RUN apt-get update && \
    apt-get install -y php-dev autoconf gcc make && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Reset bitnami script as entrypoint
ENTRYPOINT [ "/opt/bitnami/scripts/laravel/entrypoint.sh" ]

# Run custom script
CMD ["bash", "-c", "chmod +x ./docker/setup.sh && ./docker/setup.sh"]
