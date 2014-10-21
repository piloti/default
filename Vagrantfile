# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "Piloti-LAMP"
  config.vm.box_url = "../Piloti-LAMP"

  config.vm.network :forwarded_port, guest: 80, host: 8080
  #config.vm.network :forwarded_port, guest: 3306, host: 3306

  config.vm.network "private_network", ip: "10.0.0.33"

  config.vm.synced_folder ".", "/var/www2/"


end
